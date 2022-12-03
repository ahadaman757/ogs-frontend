// import { JoiValidation } from "../validators/JoiValidation.js";
// import Extractdata from "../services/ExtractData.js";
// import Job from "../models/Job.js";
// import JobSkill from "../models/JobSkill.js";
// import Skill from "../models/Skills.js";
// import JobOptions from "../models/Categories/JobPostOptions.js";
// import sequelize from "../config/db.js";
// import JobPostOptions from "../models/Categories/JobPostOptions.js";

import sequelize from "../../config/db.js";
import paginate from "jw-paginate";

const addNewsletterSubscriber = async (req, res, next) => {
  const { value } = req.body;
  try {
    const checkExsisting = await sequelize.query(
      `SELECT * FROM newsletter_subscribers WHERE email = '${value}'`
    );
    console.log(checkExsisting[0]);
    if (checkExsisting[0].length > 0) {
      res.json({
        code: 0,
        message: "Email already exists",
      });
    } else {
      // CHECK IF USER IS A REGISTERED USER
      const checkRegUser = await sequelize.query(
        `SELECT email FROM users WHERE email = '${value}'`
      );
      if (checkRegUser[0].length > 0) {
        res.json({
          code: 0,
          message:
            "This email belongs to a registered user which means he is already subscribed to your emails.",
        });
      } else {
        const insertData = await sequelize.query(
          `INSERT INTO newsletter_subscribers (email) VALUES('${value}')`
        );
        res.json({
          code: 1,
          message: "User Added",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

const getNewsLetterSubscribers = async (req, res, next) => {
  const { page } = req.body;

  const userRegEmails = await sequelize.query(
    `SELECT users.email, newsletter_subscribers.email FROM users INNER JOIN newsletter_subscribers`
  );
  const newsletterSubEmail = await sequelize.query(
    `SELECT email FROM newsletter_subscribers`
  );
  const finalArray = userRegEmails[0].concat(newsletterSubEmail[0]);
  userRegEmails[0].concat(newsletterSubEmail[0]);

  //   const page = parseInt(req.query.page) || 1;
  const pageSize = 15;
  console.log(page);
  const pager = paginate(finalArray.length, page, pageSize);

  const pageOfItems = finalArray.slice(pager.startIndex, pager.endIndex + 1);

  res.json({ page, pageOfItems });
};

// const EmployerJobs = async (req, res, next) => {
//   console.log("receiving employer job");
//   try {
//     const user_id = req.params.id;
//     const [jobs_record, meta] =
//       await sequelize.query(`select j.id,j.job_title, countries.name as country,cities.name as city,careerlevels.career_title, minSalary.max_salary as min_salary,maxSalary.max_salary as max_salary,business_types.business_type_name as industry,
//         genders.gender_title,jobshifts.job_shift,educationqualifications.qualification,j.degree_title,maxAge.max_age as max_age,minAge.max_age as min_age,maxExperience.max_experience as max_experience,minExperience.max_experience as max_experience,DATE(j.valid_upto) as last_date_apply,j.experience_info ,j.job_description, DATE(j.createdAt) AS posted_at,jobtypes.job_type_title
//         from job j
//        left outer JOIN job_applicants_cv on j.id =job_applicants_cv.job_id
//        left outer JOIN countries on J.country_id=countries.id
//        left outer JOIN  cities on J.city_id=cities.id
//        left outer JOIN careerlevels on career_level_id=careerlevels.id
//        left outer JOIN  maxsalaries minSalary on	min_salary_id =minSalary.id
//        left outer JOIN  maxsalaries maxSalary on	max_salary_id =maxSalary.id
//        left outer JOIN business_types on functional_area_id = business_types.id
//        left outer JOIN genders on gender_title_id  = genders.id
//        left outer JOIN jobshifts on j.job_shift_id  = jobshifts.id
//        left outer JOIN jobtypes on j.job_type_id  = jobtypes.id
//        left outer JOIN educationqualifications on j.required_qualification_id=educationqualifications.id
//        left outer JOIN maxagerequirements maxAge on j.max_age_id=maxAge.id
//        left outer JOIN maxagerequirements minAge on j.min_age_id=minAge.id
//        left outer JOIN maxexperiences maxExperience on j.max_experience_id=maxExperience.id
//        left outer JOIN maxexperiences minExperience on j.min_experience_id=minExperience.id
//         where posted_by_id = ${user_id}
//         `);

//     res.json(jobs_record);
//   } catch (error) {
//     next(error);
//   }
// };
// const UpdateJob = async (req, res, next) => {
//   try {
//     console.log(req.body.values);
//     const {
//       job_id,
//       job_title,
//       experience_info,
//       supervisor_gender_title,
//       co_worker_percentage,
//       valid_upto,
//       country,
//       city,
//       career_level,
//       min_salary,
//       max_salary,
//       functional_area,
//       gender_title,
//       job_shift,
//       job_type_title,
//       required_qualification,
//       degree_title,
//       min_experience,
//       max_experience,
//       min_age,
//       max_age,
//     } = req.body.values;
//     const update_job_record = await sequelize.query(
//       `UPDATE job SET job_title='${job_title}',experience_info='${experience_info}',supervisor_gender_title='${supervisor_gender_title}',co_worker_percentage='${co_worker_percentage}',valid_upto='${valid_upto}',country_id=${country},city_id=${city},career_level_id=${career_level},min_salary_id=${min_salary},max_salary_id=${max_salary},functional_area_id=${functional_area},gender_title_id=${gender_title},job_shift_id=${job_shift},job_type_id=${job_type_title},required_qualification_id=${required_qualification},degree_title='${degree_title}',min_experience_id=${min_experience},max_experience_id=${max_experience},min_age_id=${min_age},max_age_id=${max_age} WHERE id =${job_id}`
//     );
//     res.json({
//       message: "updated",
//     });
//   } catch (error) {
//     next(error);
//   }
// };
// const UpdateJobColumn = async (req, res, next) => {
//   try {
//     const { status, job_id, column } = req.body;
//     const update = await sequelize.query(
//       `UPDATE job SET ${column}=${status} WHERE id=${job_id} `
//     );
//     res.json({ message: "updated" });
//   } catch (error) {
//     next(error);
//   }
// };
export { addNewsletterSubscriber, getNewsLetterSubscribers };
