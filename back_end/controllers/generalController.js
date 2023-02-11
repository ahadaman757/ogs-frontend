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
import sendEmail from './emailHandler.js';
import bodyParser from 'body-parser';
// const User = require('../models/Users')
import { application, response } from 'express';
import axios from 'axios';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).any();

const homePageJobsPK = async (req, res, next) => {
  try {
    const jobs = await sequelize.query(
      'SELECT * FROM job WHERE job.country_id = 167'
    );
    res.json({ response: jobs });
  } catch (error) {
    next(error);
  }
};
const homePageJobsIN = async (req, res, next) => {
  try {
    const jobs = await sequelize.query('SELECT * FROM job ORDER BY id DESC');
    res.json({ response: jobs });
  } catch (error) {
    next(error);
  }
};
const getPrivacyPolicy = async (req, res, next) => {
  try {
    const getData = await sequelize.query(
      `SELECT content FROM privacypolicy WHERE id = 1`
    );
    res.json({ code: 1, content: getData });
  } catch (error) {
    console.log(error);
    res.json({ code: 0, message: 'Error getting privacy policy' });
  }
};
const getAboutUs = async (req, res, next) => {
  try {
    const getData = await sequelize.query(
      `SELECT content FROM about_us WHERE id = 1`
    );
    res.json({ code: 1, content: getData });
  } catch (error) {
    console.log(error);
    res.json({ code: 0, message: 'Error getting About Us' });
  }
};

const getCompanies = async (req, res, next) => {
  try {
    const getCompanies = await sequelize.query(
      'SELECT company_name, company_logo, business_webpage FROM companies'
    );
    res.json({ code: 1, getCompanies });
  } catch (e) {
    next(e);
  }
};

const getCourses = async (req, res, next) => {
  try {
    const getAllCourses = await sequelize.query(
      'SELECT * FROM ogs_courses ORDER BY id DESC'
    );
    res.json({ code: 1, getAllCourses });
  } catch (err) {
    next(err);
  }
};
const GetJobDetailsById = async (req, res, next) => {
  console.log('id');
  console.log(req.body.id);
  try {
    // const applpied_count=await sequelize.query(`SELECT COUNT(*) FROM job_applicants_cv WHERE job_id=${REQ.}`)
    const [company_jobs_record, meta] =
      await sequelize.query(`select j.id,j.job_title, j.is_approved, countries.name as country,cities.name as city,careerlevels.career_title, minSalary.max_salary as min_salary,maxSalary.max_salary as max_salary,business_types.business_type_name as industry,
    genders.gender_title,jobshifts.job_shift,educationqualifications.qualification,j.degree_title,maxAge.max_age as max_age,minAge.max_age as min_age,maxExperience.max_experience as max_experience,minExperience.max_experience as max_experience,DATE(j.valid_upto) as last_date_apply,j.experience_info ,j.job_description, DATE(j.createdAt) AS posted_at,jobtypes.job_type_title
    from job j 
   left outer JOIN job_applicants_cv on j.id =job_applicants_cv.job_id
   left outer JOIN countries on j.country_id=countries.id
   left outer JOIN  cities on j.city_id=cities.id
   left outer JOIN careerlevels on career_level_id=careerlevels.id
   left outer JOIN  maxsalaries minSalary on	min_salary_id =minSalary.id
   left outer JOIN  maxsalaries maxSalary on	max_salary_id =maxSalary.id
   left outer JOIN business_types on functional_area_id = business_types.id
   left outer JOIN genders on gender_title_id  = genders.id
   left outer JOIN jobshifts on j.job_shift_id  = jobshifts.id
   left outer JOIN jobtypes on j.job_type_id  = jobtypes.id
   left outer JOIN educationqualifications on j.required_qualification_id=educationqualifications.id
   left outer JOIN maxagerequirements maxAge on j.max_age_id=maxAge.id
   left outer JOIN maxagerequirements minAge on j.min_age_id=minAge.id
   left outer JOIN maxexperiences maxExperience on j.max_experience_id=maxExperience.id
   left outer JOIN maxexperiences minExperience on j.min_experience_id=minExperience.id
    where j.id = ${req.body.id}
    `);
    console.log(meta);
    res.json(company_jobs_record);
  } catch (error) {
    next(error);
  }
};
const getCountries = async(req, res, next) => {
  try {
    const countries = await sequelize.query(`SELECT id as country_id, name as country_name from countries`);
    res.json({code: 1, countries: countries});
  } catch (err) {
    res.json({code: 0, message: 'An error occured'})
  }
}
const verifyEmail = async (req, res, next) => {
  try {
    const { userEmail, token } = req.body;
    const checkEmail = await sequelize.query(
      `SELECT * FROM users WHERE email = '${userEmail}'`
    );
    if (checkEmail[0].length > 0) {
      res.json({ code: 0, message: 'User with that email already exists' });
    } else {
      let {error, response} = await sendEmail(
        userEmail,
        false,
        '',
        'Verify your email',
        `Thank you for your interest in registering at OGS Man Power!\n Your verification code is: ${token}`
      );
      if (response) {
        res.json({
          code: 1,
          message: 'Email has been sent',
          fromMailer: response,
        });
      } else {
        res.json({
          code: 0,
          message: "Email wasn't sent",
          fromMailer: response,
        });
      }
      console.log('RESPONSE ', response);
      console.log('error ', error);
    }
  } catch (err) {
    res.json({ code: 0, message: err });
  }
};

const getAdditionalFiles = async (req, res, next) => {
  try {
    const files = await sequelize.query("SELECT * FROM additional WHERE display > 0");
    res.json({code: 1, files: files});
  } catch (err) {
    res.json({code: 0, message: err})
  }
}

const whatsAppCode = async (req, res, next) => {
  console.log("Message: ", `Your verification code is: ${req.body.token}`);
  console.log("Phone: ", `${req.body.number}`);
  try {
    axios.post(`https://3.14.27.53:3004/send-message`, {
      number: req.body.number,
      message: `Your verification code is: ${req.body.token}`
    }).then(response => console.log(response))
    res.json({code: 1, files: files});
  } catch (err) {
    res.json({code: 0, message: err})
  }
}
export {
  homePageJobsPK,
  getPrivacyPolicy,
  getAboutUs,
  getCompanies,
  homePageJobsIN,
  getCourses,
  GetJobDetailsById,
  verifyEmail,
  getCountries,
  getAdditionalFiles,
  whatsAppCode
};
