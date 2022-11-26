import { JoiValidation } from "../validators/JoiValidation.js";
import Extractdata from "../services/ExtractData.js";
import Job from "../models/Job.js";
import JobSkill from "../models/JobSkill.js";
import Skill from "../models/Skills.js";
import JobOptions from "../models/Categories/JobPostOptions.js";
import sequelize from "../config/db.js";
import JobPostOptions from "../models/Categories/JobPostOptions.js";
const getSeekerCvs = async (req, res, next) => {
    const [seeker_cvs_record, meta] = await sequelize.query(`SELECT cv_id, user_id, jobtypes.job_type_title, job_title, first_name, last_name, genders.gender_title, dob, cv_image, passport_photo, domicile, postal_code, mobile_number,timestampdiff(YEAR,cv.dob,NOW()) as age, work_number, home_number, address, countries.name as country, cities.name as city, id_card_no, passport_number, valid_upto, passport_expiry_date, educationqualifications.qualification, careerlevels.career_title, degree_title, institution,max_Experience.max_experience, current_Salary.max_salary as current_salary, expected_Salary.max_salary as expected_salary, positions.position_title, nationality.nationality, religion.religion,marital_status.status as marital_status, skin_color, weight, height FROM cv
    left outer JOIN countries on cv.country=countries.id
      left outer JOIN cities on cv.city=cities.id
    left outer   JOIN jobtypes on cv.interested_in=jobtypes.job_type_title
      left outer JOIN genders on cv.gender=genders.gender_title
     left outer  JOIN educationqualifications on education_level=educationqualifications.id
      left outer JOIN careerlevels on career_level=careerlevels.id
      left outer JOIN business_types on industry=business_types.id
      left outer JOIN maxexperiences max_Experience on cv.max_experience=max_Experience.id
      left outer JOIN positions on cv.position=positions.position_id
      left outer JOIN nationality on cv.nationality=nationality.num_code
      left outer JOIN maxsalaries current_Salary on cv.current_salary=current_Salary.id
      left outer JOIN maxsalaries expected_Salary on cv.expected_salary=expected_Salary.id
       left outer JOIN religion  on cv.religion=religion.id
       left outer JOIN marital_status  on cv.marital_status=marital_status.id
   WHERE user_id=${req.user.id}`)
    res.json(seeker_cvs_record)

}
const CreateCv = async (req, res, next) => {

}
export { getSeekerCvs, CreateCv }