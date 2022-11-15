import CustomErrorHandler from "../services/CustomErrorHandler.js";
import { JoiValidation } from "../validators/JoiValidation.js";
import { VALID_MODE } from "../config/index.js";
import User from "../models/User.js";
import Extractdata from "../services/ExtractData.js";
import errorHandler from "../middlewares/errorHandler.js";
import multer from "multer";
import path from "path";
import Company from "../models/CompanyProfile/Company.js";
import bcrypt from "bcrypt";
import { REFRESH_SECRET, JWT_SECRET } from "../config/index.js";
import RefreshToken from "../models/refreshToken.js";
import { decryptPassword } from "../services/Main.js";
import jwt_service from "../services/JwtService.js";
import sequelize from "../config/db.js";
// const User = require('../models/Users')
const registercontroller = async (req, res, next) => {
  // extract error from validation schema
  try {
    let orderedData;
    const body = req.body;
    const { registerType = "seeker" } = req.body;
    if (registerType == "recruiter") {
      // order the requested data according to database
      orderedData = Extractdata.EmployerSignUp({
        ...req.body,
        file: req.file?.path,
      });
      // Perform Validations
      if (VALID_MODE == "true") {
        console.log(orderedData.orderedData);
        // perform validations
        var { error } = JoiValidation.signupRecruiter(orderedData.orderedData);
      } else {
        // dont perform validations
        error = null;
      }
    } else {
      // else block for seeker register
      // order the requested data according to database
      orderedData = Extractdata.SeekerSignUp({ ...req.body });
      // Perform Validations
      if (VALID_MODE == "true") {
        // perform validations
        var { error } = JoiValidation.signupSeeker(orderedData.orderedData);
      } else {
        // dont perform validations
        error = null;
      }
    }
    if (error) {
      next(error);
    } else {
      const { first_name, last_name, email, password, repeat_password, position } =
        req.body;
      // first check whether a user is registered with this email
      const user = await User.findOne({ where: { email: email } });
      if (user === null) {
        const hash = await decryptPassword(password);
        // insert into database
        User.create({
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: hash,
          repeat_password: repeat_password,
          position: position,
        })
          .then((response) => {
            if (registerType == "recruiter") {
              // insertion for employer start
              // Company.createUser(orderedData.orderedData)
              response.createCompany({
                ...orderedData.orderedData,
                UserId: response.id,
              });
              // insertion for employer end
            }
            else {
              if (registerType == "seeker") {
                const { job_title, dob, domicile, postal_code, mobile_number, work_number, home_number, address, country, city, id_card_no, passport_number, valid_upto, degree_title, institution, first_name, last_name, min_experience, max_experience, industry = 1, education_level, gender, interested_in } = body
                sequelize.query(`insert INTO cv (job_title,dob,domicile,postal_code,mobile_number,work_number,home_number,address,country,city,id_card_no,passport_number,valid_upto,degree_title,institution,first_name,last_name,min_experience,max_experience,industry,education_level,gender,interested_in) VALUES('${job_title}','${dob}','${domicile}',${postal_code},${mobile_number},${work_number},${home_number},'${address}',${country},${city},'${id_card_no}','${passport_number}','${valid_upto}','${degree_title}','${institution}','${first_name}','${last_name}',${min_experience},${max_experience},${industry},${education_level},${gender},${interested_in})`).then(res => {
                  console.log("cv addde")
                }).catch(error => {
                  console.log(error)
                })
              }
            }
            console.log(response.id);
            const accesstoken = jwt_service.sign(
              { id: response.id },
              "1y",
              JWT_SECRET
            );
            const refresh_token = jwt_service.sign(
              { id: response.id },
              "1y",
              REFRESH_SECRET
            );
            RefreshToken.create({ token: refresh_token })
              .then((resp) => {
                console.log("token created");
              })
              .catch((error) => {
                return next(new Error("Problem occured in database"));
              });
            res.json({
              accesstoken,
              refresh_token,
              message: "Account Created successfully",
            });
          })
          .catch((error) => {
            return next(error);
          });
      } else {
        return next(CustomErrorHandler.alreadyExist("Email already Existss"));
      }
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const imageUpload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

// SignIn Controller
const signincontroller = async (req, res, next) => {
  // first get request body
  const { email, password } = req.body;
  const { error } = JoiValidation.signin(req.body);
  if (
    email != undefined ||
    password != undefined ||
    email != "" ||
    password != ""
  ) {
    if (error) {
      next(error);
    } else {
      //   check in database
      const user = await User.findOne({ where: { email: email } });
      if (user === null) {
        return next(
          CustomErrorHandler.notExist("Account Not Found by This Email")
        );
      } else {
        bcrypt.compare(password, user.password, function (err, result) {
          if (result) {
            // correct Credentials
            const accesstoken = jwt_service.sign(
              { id: user.id },
              "1y",
              JWT_SECRET
            );
            const refresh_token = jwt_service.sign(
              { id: user.id },
              "1y",
              REFRESH_SECRET
            );
            RefreshToken.create({ token: refresh_token })
              .then((res) => { })
              .catch((error) => {
                return next(new Error("Problem occured in database"));
              });
            res.json({
              error: 0,
              message: "Access token assigned!",
              accesstoken,
              refresh_token,
            });
          } else {
            // wrong Credentials
            return next(CustomErrorHandler.wrongCredentials());
          }
        });
      }
    }
  } else {
    res.json({ error: 1, message: "All fields are required" });
  }
};
const ProfileController = (req, res, next) => {
  res.json(req.user);
};
export { registercontroller, imageUpload, signincontroller, ProfileController };
