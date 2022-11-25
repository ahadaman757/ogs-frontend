import { JoiValidation } from "../validators/JoiValidation.js";
import Extractdata from "../services/ExtractData.js";
import Job from "../models/Job.js";
import JobSkill from "../models/JobSkill.js";
import Skill from "../models/Skills.js";
import JobOptions from "../models/Categories/JobPostOptions.js";
import sequelize from "../config/db.js";
import JobPostOptions from "../models/Categories/JobPostOptions.js";
const getSeekerCvs = async (req, res, next) => {
    const [seeker_cvs_record, meta] = await sequelize.query(`SELECT cv_id,user_id,interested_in,industry,job_title,first_name,last_name,gender,dob,cv_image,passport_photo,domicile,postal_code,mobile_number,work_number,home_number,address,country,city,id_card_no,passport_number,valid_upto,education_level,career_level,degree_title,institution,min_experience,max_experience,current_salary,expected_salary,position,nationality,religion,marital_status,skin_color,weight,height FROM cv WHERE user_id=${req.user.id}`)
    res.json(seeker_cvs_record)

}
export { getSeekerCvs }