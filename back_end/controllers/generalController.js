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
import bodyParser from "body-parser";
// const User = require('../models/Users')
const homePageJobsPK = async (req, res, next) => {
  try {
    const jobs = await sequelize.query(
      "SELECT * FROM job WHERE job.country_id = 167"
    );
    res.json({ response: jobs });
  } catch (error) {
    next(error);
  }
};

export { homePageJobsPK };
