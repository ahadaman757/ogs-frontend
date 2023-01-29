import { JoiValidation } from '../validators/JoiValidation.js';
import Extractdata from '../services/extractData.js';
import Job from '../models/Job.js';
import JobSkill from '../models/JobSkill.js';
import Skill from '../models/Skills.js';
import JobOptions from '../models/Categories/JobPostOptions.js';
import sequelize from '../config/db.js';
import JobPostOptions from '../models/Categories/JobPostOptions.js';
import path from 'path';
import fs from 'fs';

const getSeekerCvs = async (req, res, next) => {
  const [seeker_cvs_record, meta] =
    await sequelize.query(`SELECT cv_id, cv.email, user_id, cv.industry as industry_id, cv.country as country_id, jobtypes.job_type_title,cv.interested_in as job_type_id, first_name, last_name, genders.gender_title, cv.gender as gender_id, dob, cv_image, passport_photo, domicile, postal_code, mobile_number,timestampdiff(YEAR,cv.dob,NOW()) as age, work_number, home_number, address, countries.name as country, cities.name as city, id_card_no, passport_number, valid_upto, passport_issue_date, educationqualifications.qualification, cv.education_level as educational_level_id ,careerlevels.career_title,cv.career_level as career_level_id, degree_title, institution,max_Experience.max_experience,cv.max_experience as max_experience_id,cv.min_experience as min_experience_id, current_Salary.max_salary as current_salary,cv.current_salary as current_salary_id, expected_Salary.max_salary as expected_salary,cv.expected_salary as expected_salary_id, positions.position_title,cv.position as position_id, nationality.nationality,cv.nationality as nationality_id,religion.religion,cv.religion as religion_id,marital_status.status as marital_status ,cv.marital_status as marital_status_id, skin_color, weight, height FROM cv
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
   WHERE user_id=${req.user.id}`);
  res.json(seeker_cvs_record);
};
const CreateCv = async (req, res, next) => {
  try {
    const userID = req.user.id;
    const { body } = req;
    console.log(req.body);
    const {
      job_title,
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
    console.log(req.files?.image?.path);
    const insert_cv = await sequelize.query(
      `insert INTO cv (cv_image,job_title,career_level,dob,domicile,postal_code,mobile_number,work_number,home_number,address,country,city,id_card_no,passport_number,passport_photo,valid_upto,passport_issue_date,degree_title,institution,first_name,last_name,max_experience,min_experience,industry,education_level,gender,interested_in,nationality,religion,marital_status,current_salary,expected_salary,skin_color,weight,height,user_id) VALUES('${req.files?.image[0]?.path}', '${job_title}', ${career_level}, '${dob}','${domicile}',${postal_code},${mobile_number},${work_number},${home_number},'${address}',${country},${city},'${id_card_no}','${passport_number}','${req.files?.passport_photo[0]?.path}','${valid_upto}','${passport_issue_date}','${degree_title}','${institution}','${first_name}','${last_name}',${max_experience},${min_experience},${industry},${education_level},${gender},${interested_in},"NULL",${nationality},${religion},${marital_status},${current_salary},${expected_salary},'${skin_color}',${weight}, ${height},${userID})`
    );
    console.log(insert_cv);
    res.json({ message: 'cv added' });
  } catch (error) {
    next(error);
  }
};
const UpdateCv = async (req, res, next) => {
  try {
    console.log('cv ');
    const userID = req.user.id;
    const { cv_id, cv_image, passport_photo_pre } = req.body;
    const { body } = req;
    console.log(cv_image, passport_photo_pre);
    // check both images if its is undefined or not
    let cv_image_path = '';
    let passport_image_path = '';
    if (req.files?.image == null) {
      cv_image_path = cv_image;
    } else {
      fs.unlink('images/' + cv_image.replace('images', ''), (err) => {
        if (err) {
          console.log('error');
          console.log(err);
          next(err);
        }

        console.log('Delete File successfully.');
      });
      cv_image_path = req.files.image[0].path;
    }
    if (req.files?.passport_photo == null) {
      console.log(req.files);
      passport_image_path = passport_photo_pre;
    } else {
      fs.unlink(
        'images/' + cv_image.passport_photo_pre('images', ''),
        (err) => {
          if (err) {
            console.log('error');
            console.log(err);
            next(err);
          }

          console.log('Delete File successfully.');
        }
      );
      passport_image_path = req.files.passport_photo[0].path;
    }
    const {
      job_title,
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
    const query = `UPDATE cv SET interested_in=${interested_in},industry=${industry},job_title='${job_title}',first_name='${first_name}',last_name='${last_name}',gender=${gender},dob='${dob}',cv_image='${cv_image_path}',passport_photo='${passport_image_path}',domicile='${domicile}',postal_code=${postal_code},mobile_number=${mobile_number},work_number=${work_number},home_number=${home_number},address='${address}',country=${country},city=${city},id_card_no='${id_card_no}',passport_number=${passport_number},valid_upto='${valid_upto}',passport_issue_date='${passport_issue_date}',education_level=${education_level},career_level=${career_level},degree_title='${degree_title}',institution='${institution}',min_experience=${min_experience},max_experience=${max_experience},current_salary=${current_salary},expected_salary=${expected_salary},position=${position},nationality=${nationality},religion=${religion},marital_status=${marital_status},skin_color='${skin_color}',weight=${weight},height=${height} WHERE cv_id =${cv_id}`;
    const update_cv = await sequelize.query(query);
    res.json({ message: 'cv updated' });
  } catch (error) {
    next(error);
  }
};
const getSeekerCVById = async (req, res, next) => {
  try {
    console.log(req.body);
    const { user_id } = req.params;
    const [seeker_cvs_record, meta] =
      await sequelize.query(`SELECT cv_id, user_id, cv.industry as industry_id, cv.country as country_id, jobtypes.job_type_title,cv.interested_in as job_type_id, first_name, last_name, genders.gender_title, cv.gender as gender_id, dob, cv_image, passport_photo, domicile, postal_code, mobile_number,timestampdiff(YEAR,cv.dob,NOW()) as age, work_number, home_number, address, countries.name as country, cities.name as city, id_card_no, passport_number, valid_upto, passport_issue_date, educationqualifications.qualification, cv.education_level as educational_level_id ,careerlevels.career_title,cv.career_level as career_level_id, degree_title, institution,max_Experience.max_experience,cv.max_experience as max_experience_id,cv.min_experience as min_experience_id, current_Salary.max_salary as current_salary,cv.current_salary as current_salary_id, expected_Salary.max_salary as expected_salary,cv.expected_salary as expected_salary_id, positions.position_title,cv.position as position_id, nationality.nationality,cv.nationality as nationality_id,religion.religion,cv.religion as religion_id,marital_status.status as marital_status ,cv.marital_status as marital_status_id, skin_color, weight,email, height FROM cv
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
   WHERE user_id=${user_id}`);

    res.json(seeker_cvs_record);
  } catch (error) {
    next(error);
  }
};
export { getSeekerCvs, CreateCv, UpdateCv, getSeekerCVById };
