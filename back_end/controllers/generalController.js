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
// const User = require('../models/Users')
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

export {
  homePageJobsPK,
  getPrivacyPolicy,
  getAboutUs,
  getCompanies,
  homePageJobsIN,
  getCourses,
};
