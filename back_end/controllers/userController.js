import CustomErrorHandler from '../services/CustomErrorHandler.js';
import { JoiValidation } from '../validators/JoiValidation.js';
import { VALID_MODE } from '../config/index.js';
import User from '../models/User.js';
import Extractdata from '../services/extractData.js';
import errorHandler from '../middlewares/errorHandler.js';
import multer from 'multer';
import path from 'path';
import Company from '../models/CompanyProfile/Company.js';
import bcrypt from 'bcrypt';
import { REFRESH_SECRET, JWT_SECRET } from '../config/index.js';
import RefreshToken from '../models/refreshToken.js';
import { decryptPassword } from '../services/Main.js';
import jwt_service from '../services/JwtService.js';
import sequelize from '../config/db.js';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import md5 from 'md5';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahadaman@jataq.com',
    pass: 'vhdcqlmzsdwooykz',
  },
});

const sendResetLink = (email) => {
  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve('./controllers/AdminControllers/template'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./controllers/AdminControllers/template'),
  };
  transporter.use('compile', hbs(handlebarOptions));
  let encoded = Buffer.from(email).toString('base64');
  const mailOptions = {
    from: 'OGS Man Power <ceo@ogsmanpower.com>',
    to: `${email}`,
    subject: 'Reset your password!',
    template: 'reset',
    context: {
      para: `${encoded}`,
    },
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return false;
    } else {
      return true;
    }
  });
};

const resetPass = async (req, res, next) => {
  try {
    const { id, password } = req.body;
    const email = Buffer.from(id, 'base64').toString();
    const decryptedPass = await decryptPassword(password);
    const changePassword = await sequelize.query(
      `UPDATE users SET password = "${decryptedPass}" WHERE email = "${email}"`
    );

    console.log('Email decrypted ', email);
    console.log('Password ', password);
    console.log('Password MD5 ', decryptedPass);
    console.log('Return ', changePassword);
    if (changePassword) {
      res.json({ code: 1, message: 'Password has been changed!' });
    } else {
      res.json({ code: 0, message: 'Unable to update password' });
    }
  } catch (err) {
    res.json({ code: 0, message: 'An error occured ' + err });
  }
};

const findAccountByEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(email);
    const findUser = await sequelize.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );
    if (findUser[0].length > 0) {
      console.log('Found!', findUser);
      const resetLink = await sendResetLink(email);
      if (resetLink === true) {
        res.json({ code: 1, message: `Please check your email ${email}` });
      } else {
        res.json({ code: 0, message: 'An error occured while sending link' });
      }
    } else {
      console.log('Not found!', findUser);
      res.json({ code: 0, message: `No account found by email ${email}` });
    }
  } catch (err) {
    res.json({ code: 0, message: 'An error occured ' + err });
  }
};

// const User = require('../models/Users')
const sendEmployerRegistrationEmail = async (req, res, next) => {
  const { email, firstName } = req.body;
  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve('./controllers/AdminControllers/template'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./controllers/AdminControllers/template'),
  };
  transporter.use('compile', hbs(handlebarOptions));
  console.log('Email Request Body: -> ', req.body);
  console.log('Sending email to ' + email);
  const mailOptions = {
    from: 'OGS Man Power <ceo@ogsmanpower.com>',
    to: `${email}`,
    subject: 'Welcome To OGS Man Power!',
    template: 'email',
    context: {
      para: `We welcome you on board!`,
      fName: firstName,
    },
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      const mailOptions = {
        from: 'OGS Man Power <ceo@ogsmanpower.com>',
        to: `ceo@ogsmanpower.com`,
        subject: 'A new employer joined!',
        template: 'email',
        context: {
          para: `We welcome you on board! ${email}`,
          fName: firstName,
        },
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          res.json('message sent to owner');
        }
      });
      res.json('done');
    }
  });
};
const registercontroller = async (req, res, next) => {
  console.log('regsiter controller');
  // console.log(req.files.image[0].path);
  // extract error from validation schema
  try {
    let orderedData;
    const body = req.body;
    const { registerType = 'seeker' } = req.body;
    console.log('file');
    console.log(req.files);
    if (registerType == 'recruiter') {
      // order the requested data according to database
      orderedData = Extractdata.EmployerSignUp({
        ...req.body,
        file: req.file?.path,
      });
      console.log(orderedData);
      // Perform Validations
      if (VALID_MODE == 'true') {
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
      if (VALID_MODE == 'true') {
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
      const {
        first_name,
        last_name,
        email,
        password,
        repeat_password,
        position,
      } = req.body;
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
            console.log('user created');
            if (registerType == 'recruiter') {
              // insertion for employer start
              // Company.createUser(orderedData.orderedData)
              response.createCompany({
                ...orderedData.orderedData,
                UserId: response.id,
              });
              sequelize.query(
                `UPDATE users SET userTypeId = 2 WHERE id='${response.id}'`
              );
              // insertion for employer end
            } else {
              if (registerType == 'seeker') {
                const {
                  job_title,
                  email,
                  dob,
                  domicile,
                  postal_code,
                  mobile_number,
                  work_number,
                  home_number,
                  address,
                  country,
                  city,
                  id_card_no,
                  passport_number,
                  valid_upto,
                  degree_title,
                  institution,
                  first_name,
                  last_name,
                  max_experience,
                  min_experience,
                  industry = 1,
                  education_level,
                  gender,
                  interested_in,
                  career_level,
                  position,
                  nationality,
                  religion,
                  marital_status,
                  current_salary,
                  expected_salary,
                  skin_color,
                  weight,
                  height,
                  passport_issue_date,
                } = body;
                sequelize
                  .query(
                    `insert INTO cv (email,cv_image,job_title,career_level,dob,domicile,postal_code,mobile_number,work_number,home_number,address,country,city,id_card_no,passport_number,passport_photo,valid_upto,passport_issue_date,degree_title,institution,first_name,last_name,max_experience,min_experience,industry,education_level,gender,interested_in,nationality,religion,marital_status,current_salary,expected_salary,skin_color,weight,height,user_id) VALUES('${email}','${req.files?.image[0]?.path}', '${job_title}', ${career_level}, '${dob}','${domicile}',${postal_code},${mobile_number},${work_number},${home_number},'${address}',${country},${city},'${id_card_no}','${passport_number}','${req.files?.passport_photo[0]?.path}','${valid_upto}','${passport_issue_date}','${degree_title}','${institution}','${first_name}','${last_name}',${max_experience},${min_experience},${industry},${education_level},${gender},${interested_in},${nationality},${religion},${marital_status},${current_salary},${expected_salary},'${skin_color}',${weight}, ${height},${response.id})`
                  )
                  .then((res) => {
                    console.log('cv addde');
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                sequelize.query(
                  `UPDATE users SET userTypeId = 1 WHERE email='${email}'`
                );
              }
            }
            console.log(response.id);
            const accesstoken = jwt_service.sign(
              { id: response.id },
              '1y',
              JWT_SECRET
            );
            const refresh_token = jwt_service.sign(
              { id: response.id },
              '1y',
              REFRESH_SECRET
            );
            RefreshToken.create({ token: refresh_token })
              .then((resp) => {
                console.log('token created');
              })
              .catch((error) => {
                return next(new Error('Problem occured in database'));
              });
            res.json({
              accesstoken,
              refresh_token,
              message: 'Account Created successfully',
            });
          })
          .catch((error) => {
            return next(error);
          });
      } else {
        return next(CustomErrorHandler.alreadyExist('Email already Existss'));
      }
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const imageUpload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimeType && extname) {
      return cb(null, true);
    }
    cb('Give proper files formate to upload');
  },
}).fields([
  {
    name: 'image',
    maxCount: 1,
  },
  {
    name: 'passport_photo',
  },
]);
const passportUpload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimeType && extname) {
      return cb(null, true);
    }
    cb('Give proper files formate to upload');
  },
}).single('passport_photo');

// SignIn Controller
const signincontroller = async (req, res, next) => {
  // first get request body
  const { email, password } = req.body;
  const { error } = JoiValidation.signin(req.body);
  if (
    email != undefined ||
    password != undefined ||
    email != '' ||
    password != ''
  ) {
    if (error) {
      next(error);
    } else {
      //   check in database
      const user = await User.findOne({ where: { email: email } });
      if (user === null) {
        // next(CustomErrorHandler.notExist("Account Not Found by This Email"));
        return res.json({
          code: 0,
          message: 'Account Not Found by This Email',
        });
      } else {
        bcrypt.compare(password, user.password, function (err, result) {
          if (result) {
            // correct Credentials
            const accesstoken = jwt_service.sign(
              { id: user.id, userType: user.userTypeId },
              '1y',
              JWT_SECRET
            );
            const refresh_token = jwt_service.sign(
              { id: user.id, userType: user.userTypeId },
              '1y',
              REFRESH_SECRET
            );
            RefreshToken.create({ token: refresh_token })
              .then((res) => {})
              .catch((error) => {
                return next(new Error('Problem occured in database'));
              });
            res.json({
              error: 0,
              code: 1,
              message: 'Access token assigned!',
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
    res.json({ error: 1, message: 'All fields are required' });
  }
};
const ProfileController = async (req, res, next) => {
  console.log('me profile');
  console.log(req.user.id);
  const [employer_record, metadata] =
    await sequelize.query(`select u.id,u.first_name,u.last_name,positions.position_title as position,u.email,countries.name as country,cities.name as city,c.business_mobile_number,c.company_name,c.company_logo,c.business_webpage,
  c.business_address,c.contact_person_name,c.contact_person_number,c.contact_person_email,business_types.business_type_name,c.country as country_id,c.city as city_id
  from users u 
 left outer JOIN  companies c on u.companyId=c.id
 left outer JOIN positions on u.position=positions.position_id
 left outer JOIN countries on c.country=countries.id
 left outer JOIN cities on c.city=cities.id
 left outer JOIN business_types on c.businessTypeId=business_types.id
  where u.id =${req.user.id}`);
  console.log(employer_record);
  res.json(employer_record[0]);
};
const SeekerProfileController = async (req, res, next) => {
  const [seeker_record, metadata] =
    await sequelize.query(`select u.id,u.first_name,u.last_name,positions.position_title as position,u.email
  from users u 
  JOIN positions on u.position=positions.position_id
      where u.id =${req.user.id}`);

  res.json(seeker_record[0]);
};

const ResetPassword = async (req, res, next) => {
  // get user id
  try {
    const user_id = req.user.id;
    const { old_password, new_password } = req.body;
    const req_old_password = old_password;
    const req_new_password = new_password;
    const [user_record, user_record_meta] = await sequelize.query(
      `SELECT * from users where id = ${user_id}`
    );
    console.log(user_record[0]);
    bcrypt.compare(
      req_old_password,
      user_record[0].password,
      async function (err, result) {
        console.log(result);
        if (err || !result) {
          if (err) {
            return next(err);
          }
          return next(
            CustomErrorHandler.unAuthorized('old Password not matched')
          );
        } else if (result) {
          const hash = await decryptPassword(req_new_password);

          const update_password_record = await sequelize.query(
            `update users set password = '${hash}' where id= ${user_id} `
          );

          res.json({ message: 'password updated' });
        }
      }
    );
  } catch (error) {
    next(error);
  }

  // check req_old_password with database password

  // update password field in users table

  // const [reset_password, user_password_meta] = sequelize.query(`update password * from users where id = ${user_id}`)
};
const UpdateProfile = async (req, res, next) => {
  // get user id
  console.log('reb body');
  console.log(req.body);

  try {
    const user_id = req.user.id;
    const {
      first_name,
      last_name,
      position,
      country,
      city,
      contact_number,
      address,
    } = req.body;

    const [update_profile_record, update_profile_record_meta] =
      await sequelize.query(
        `update users set first_name='${first_name}' ,last_name ='${last_name}',position=${position} where id=${user_id}`
      );
    const company_old_record = await sequelize.query(
      `select company_logo from companies where userId= ${user_id}`
    );
    console.log(company_old_record);
    // company_logo=${req.file.path}
    const company_profile_record = sequelize.query(
      `update companies set country=${country}, city=${city},business_mobile_number='${contact_number}',business_address='${address}' where userId=${user_id}`
    );
    res.json({ message: 'Updated successfull' });
  } catch (error) {
    next(error);
  }

  // check req_old_password with database password

  // update password field in users table

  // const [reset_password, user_password_meta] = sequelize.query(`update password * from users where id = ${user_id}`)
};
export {
  registercontroller,
  imageUpload,
  signincontroller,
  ProfileController,
  ResetPassword,
  UpdateProfile,
  passportUpload,
  SeekerProfileController,
  sendEmployerRegistrationEmail,
  findAccountByEmail,
  resetPass,
};
