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

const GetCityByCountry = async (req, res, next) => {
  try {
    const country_id = req.body.country_id;
    console.log('city');
    const [cities, metadata] = await sequelize.query(
      `select id,name from cities where country_id = ${country_id} `
    );
    res.json(cities);
  } catch (error) {
    return next(error);
  }
};
const GetJobTitlesByIndustry = async (req, res, next) => {
  try {
    const industry_id = req.body.industry_id;
    console.log('city');
    const [job_titles, metadata] = await sequelize.query(
      `select id,name from sub_category where cat_id = ${industry_id} `
    );
    res.json(job_titles);
  } catch (error) {
    return next(error);
  }
};
const GetEmployerOptions = async (req, res, next) => {
  try {
    const [positions, metapositions] = await sequelize.query(
      `select * from positions`
    );
    const [industries, metadata] = await sequelize.query(
      `select * from business_types`
    );
    const [countries, metaxountry] = await sequelize.query(
      `select id,name from countries`
    );
    res.json({ industries, countries, positions });
  } catch (error) {
    return next(error);
  }
};
const SkillsForJobByid = async (req, res, next) => {
  console.log(req.params);
  const job_id = req.params.id;
  try {
    const [skills, meta] =
      await sequelize.query(`SELECT j.id,JobSkill.SkillId as skill_id,skills.text as skill FROM job j
                    left outer JOIN JobSkill on j.id=JobSkill.JobId
                    left outer JOIN skills on JobSkill.SkillId=skills.id
                    WHERE j.id=${job_id}`);
    console.log(skills);
    res.json({
      skills,
    });
  } catch (error) {
    return next(error);
  }
};

export default {
  GetCityByCountry,
  GetEmployerOptions,
  SkillsForJobByid,
  GetJobTitlesByIndustry,
};
