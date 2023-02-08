import { JoiValidation } from '../validators/JoiValidation.js';
import Extractdata from '../services/extractData.js';
import Job from '../models/Job.js';
import JobSkill from '../models/JobSkill.js';
import Skill from '../models/Skills.js';
import JobOptions from '../models/Categories/JobPostOptions.js';
import sequelize from '../config/db.js';
import JobPostOptions from '../models/Categories/JobPostOptions.js';
import sendEmail from './emailHandler.js';
const JobPostController = async (req, res, next) => {
  // get request body for job post
  const body = req.body;
  const { degree_level_id, skill_id } = body;
  // perform validations
  // const { error } = JoiValidation.JobPostValidation(body)
  const OrderedData = Extractdata.JobPost(body);
  console.log(OrderedData.orderedData);
  console.log(req.user.id);
  // insert data in job table
  Job.create({
    ...OrderedData.orderedData,
    posted_by_id: req.user.id,
  })
    .then((response) => {
      const skillListStringify = JSON.stringify(skill_id);
      const skillsParsed = JSON.parse(skillListStringify);
      skillsParsed.map(async (skill) => {
        const skillentry = await Skill.findOne({
          where: {
            text: skill.text,
          },
        });
        if (skillentry !== null) {
          // Skill Found
          JobSkill.create({
            JobId: response.id,
            SkillId: skillentry.id,
          });
        } else {
          Skill.create({
            text: skill.text,
          })
            .then((res) => {
              JobSkill.create({
                JobId: response.id,
                SkillId: res.id,
              });
            })
            .catch((error) => {
              console.log(error.message);
              return next(error);
            });
          // Skill Not Found
        }
      });
      console.log(
        'Send email to employer ',
        sendEmail(
          'ceo@ogsmanpower.com',
          false,
          'Ahad Aman',
          'Job Pending For Approval',
          'A job has been posted and waiting for your approval.'
        )
      );
      return res.json({ code: 1, message: 'added' });
    })
    .catch((error) => {
      console.log('55555555555');
      console.log(error);
      return next(error);
    });
};
// /Temporary Job Controller end

const JobMyCompaniesController = async (req, res, next) => {
  console.log('id');
  console.log(req.user.id);
  try {
    // const applpied_count=await sequelize.query(`SELECT COUNT(*) FROM job_applicants_cv WHERE job_id=${REQ.}`)
    const [company_jobs_record, meta] =
      await sequelize.query(`select DISTINCT j.id,j.job_title, j.is_approved, countries.name as country,cities.name as city,careerlevels.career_title, minSalary.max_salary as min_salary,maxSalary.max_salary as max_salary,business_types.business_type_name as industry,
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
    where posted_by_id = ${req.user.id}
    `);
    console.log(meta);
    res.json(company_jobs_record);
  } catch (error) {
    next(error);
  }
};

const getEmployerData = async (req, res, next) => {
  try {

    const cvPosted = await sequelize.query(`SELECT COUNT(*) as cv_recieved
FROM job
WHERE posted_by_id = ${req.user.id}`);

res.json({code: 1, message: cvPosted});

  } catch (err) { res.json({code: 0, message: err}) }
}

const getJobsCount = (req, res, next) => {
  sequelize
    .query(`SELECT * FROM jobs WHERE [] = ?`, [req.user.id])
    .then((response) => {
      res.send(response);
    });
};

const GetJobOption = async (req, res, next) => {
  try {
    const [results, metadata] = await sequelize.query(
      'select * from countries'
    );
    const [cities, meta] = await sequelize.query('select * from cities');
    const [position, metapos] = await sequelize.query(
      'select * from positions'
    );
    const [nationality, metanat] = await sequelize.query(
      'select num_code,nationality from nationality'
    );
    const [religion, metareligion] = await sequelize.query(
      'select * from religion'
    );
    const [marital_status, metamarital_status] = await sequelize.query(
      'select * from marital_status'
    );
    const country = results;
    const city = cities;
    const career_level = await JobOptions.CareerLevel.findAll();
    const degree = await JobOptions.Degree.findAll();

    const [functional_area, metafunctional] = await sequelize.query(
      'select * from category'
    );
    const gender = await JobOptions.Gender.findAll();
    const job_type = await JobOptions.JobType.findAll();
    const job_shift = await JobOptions.JobShift.findAll();
    const required_qualification =
      await JobOptions.EducationQualification.findAll();
    const max_experience = await JobOptions.MaxExperience.findAll();
    const max_salary = await JobOptions.MaxSalary.findAll();
    const max_age = await JobOptions.MaxAgeRequirement.findAll();

    res.json({
      marital_status,
      religion,
      nationality,
      job_type,
      country,
      career_level,
      degree,
      max_salary,
      functional_area,
      job_shift,
      gender,
      job_shift,
      required_qualification,
      max_experience,
      max_age,
      position,
    });
  } catch (error) {
    next(error);
  }
};
const JobByIdController = async (req, res, next) => {
  const job_id = req.params.id;

  const job_records =
    await sequelize.query(`SELECT job.id,job.job_title,countries.name as country,cities.name as city,careerlevels.career_title as required_career_level,minsalaries.min_salary as min_salary, maxsalaries.max_salary as max_salary, functionalareas.functional_area as functional_area, genders.gender_title as gender,jobshifts.job_shift as job_shift, educationqualifications.qualification as required_qualification,minexperiences.min_experience, maxexperiences.max_experience,minagerequirements.min_age,maxagerequirements.max_age
  from job
  JOIN countries on job.country_id=countries.id
  JOIN cities on job.city_id=cities.id
  JOIN careerlevels on job.career_level_id=careerlevels.id
  JOIN minsalaries on job.min_salary_id=minsalaries.id
  JOIN maxsalaries on job.max_salary_id=maxsalaries.id
  JOIN business_types on job.functional_area_id=business_types.id
  JOIN genders on job.gender_title_id=genders.id
  JOIN jobshifts  on job.job_shift_id=jobshifts.id
  JOIN  educationqualifications on job.required_qualification_id=educationqualifications.id
  JOIN  minexperiences on job.min_experience_id=minexperiences.id
  JOIN  maxexperiences on job.max_experience_id=maxexperiences.id
  JOIN  minagerequirements on job.min_age_id=minagerequirements.id
  JOIN  maxagerequirements on job.max_age_id=maxagerequirements.id`);

  console.log('JobByIdController');
  res.json(job_records[0]);
};
const getApplicantsForJobById = async (req, res, next) => {
  console.log('requesting');
  const { body } = req;
  const { job_id } = body;
  console.log('query strings');
  console.log(req.query);
  // search for cv in job_applicants_cv table for a given job id
  try {
    const [d_start_date, meta] = await sequelize.query(
      'select MIN(created_at) as start_date from job_applicants_cv'
    );
    const [d_end_date, meta_end] = await sequelize.query(
      'select MAX(created_at) end_date from job_applicants_cv'
    );
    const {
      start_date = d_start_date[0].start_date,
      end_date = d_end_date[0].end_date,
      country = null,
      city = null,
      education_level = null,
      max_experience = null,
      max_age = 10000,
      min_age = 0,
      gender = null,
      marital_status = null,
    } = req.query;
    console.log(start_date, end_date);
    console.log(req.query);
    const applicants_record =
      await sequelize.query(`select cv.cv_id ,cv.cv_image,cv.first_name,cv.last_name,genders.gender_title,countries.name as country,cities.name as city,DATE_FORMAT(jc.created_at, "%M %d %Y")  as applied_at,cv.mobile_number, educationqualifications.qualification,careerlevels.career_title,business_types.business_type_name,maxexperiences.max_experience,timestampdiff(YEAR,cv.dob,NOW()) as age,jc.is_shortlisted,cv.skin_color,cv.height,cv.weight,current_Salary.max_salary  as current_salary, expected_Salary.max_salary as expected_salary,religion.religion,cv.dob as Dob,cv.domicile,cv.address, jc.is_rejected, positions.position_title,u.email,marital_status.status,cv.passport_number,cv.valid_upto,cv.country as country_id,cv.passport_photo from job_applicants_cv jc JOIN cv USING(cv_id) JOIN genders on cv.gender=genders.id
    JOIN countries on cv.country=countries.id
    JOIN cities on cv.city=cities.id
    JOIN educationqualifications on education_level=educationqualifications.id
    JOIN careerlevels on career_level=careerlevels.id
    JOIN business_types on industry=business_types.id
    JOIN maxexperiences on cv.max_experience=maxexperiences.id
    JOIN positions on cv.position=positions.position_id
    JOIN maxsalaries current_Salary on cv.current_salary=current_Salary.id
    JOIN maxsalaries expected_Salary on cv.expected_salary=expected_Salary.id
    left outer JOIN religion  on cv.religion=religion.id
    left outer JOIN marital_status  on cv.marital_status=marital_status.id
    JOIN users u on cv.user_id=u.id
    where job_id =${job_id}
    AND (timestampdiff(YEAR,cv.dob,NOW()) BETWEEN ${min_age} AND ${max_age})
    AND  ( (${country} is null) OR cv.country=${country})
    AND  ((${city} is null) OR cv.city=${city})
    AND  ((${education_level} is null) OR education_level=${education_level})
    AND  ((${gender} is null) OR cv.gender=${gender})
    AND  ((${marital_status} is null) OR cv.marital_status=${marital_status})
    AND  ((${max_experience} is null) OR cv.max_experience=${max_experience})
`);

    console.log(`select cv.cv_id ,cv.cv_image,cv.first_name,cv.last_name,genders.gender_title,countries.name as country,cities.name as city,DATE_FORMAT(jc.created_at, "%M %d %Y")  as applied_at,cv.mobile_number, educationqualifications.qualification,careerlevels.career_title,business_types.business_type_name,maxexperiences.max_experience,timestampdiff(YEAR,cv.dob,NOW()) as age,jc.is_shortlisted,cv.skin_color,cv.height,cv.weight,current_Salary.max_salary  as current_salary, expected_Salary.max_salary as expected_salary,religion.religion,cv.dob as Dob,cv.domicile,cv.address, jc.is_rejected, positions.position_title,u.email,marital_status.status,cv.passport_number,cv.valid_upto,cv.country as country_id,cv.passport_photo from job_applicants_cv jc JOIN cv USING(cv_id) JOIN genders on cv.gender=genders.id
JOIN countries on cv.country=countries.id
JOIN cities on cv.city=cities.id
JOIN educationqualifications on education_level=educationqualifications.id
JOIN careerlevels on career_level=careerlevels.id
JOIN business_types on industry=business_types.id
JOIN maxexperiences on cv.max_experience=maxexperiences.id
JOIN positions on cv.position=positions.position_id
JOIN maxsalaries current_Salary on cv.current_salary=current_Salary.id
JOIN maxsalaries expected_Salary on cv.expected_salary=expected_Salary.id
left outer JOIN religion  on cv.religion=religion.id
left outer JOIN marital_status  on cv.marital_status=marital_status.id
JOIN users u on cv.user_id=u.id
where job_id =${job_id}
AND (timestampdiff(YEAR,cv.dob,NOW()) BETWEEN ${min_age} AND ${max_age})
AND  ( (${country} is null) OR cv.country=${country})
AND  ((${city} is null) OR cv.city=${city})
AND  ((${education_level} is null) OR education_level=${education_level})
AND  ((${gender} is null) OR cv.gender=${gender})
AND  ((${marital_status} is null) OR cv.marital_status=${marital_status})
AND  ((${max_experience} is null) OR cv.max_experience=${max_experience})
`);
    console.log('Applications ', job_id);
    console.log('job id ', job_id);
    const applicants_cv_record = applicants_record;
    console.log(applicants_cv_record);
    res.json(applicants_cv_record[0]);
  } catch (error) {
    return next(error);
  }
};
const JobApplicantStatusUpdate = async (req, res, next) => {
  console.log(req.body);
  try {
    const { status, job_id, cv_id, column } = req.body;
    const [update_status, meta] = await sequelize.query(
      `UPDATE job_applicants_cv SET ${column}=${status} WHERE cv_id=${cv_id} AND job_id=${job_id} `
    );
    res.json({ message: 'updated' });
  } catch (error) {
    next(error);
  }
};

const AdminGetAllJobsController = async (req, res, next) => {
  try {
    const allJobs = await sequelize.query(
      'SELECT job.*, users.first_name, users.last_name FROM job INNER JOIN users ON job.posted_by_id=users.id'
    );
    res.json(allJobs);
  } catch (error) {
    next(error);
  }
};

const AdminDeleteJob = async (req, res, next) => {
  try {
    const { jobId } = req.body;
    const deleteJob = await sequelize.query(
      `DELETE FROM job WHERE id=${jobId}`
    );
    res.json({ code: 1 });
  } catch (error) {
    next(error);
  }
};

const ViewAllJobs = async (req, res, next) => {
  console.log('view all jobs');
  try {
    const [company_jobs_record, meta] =
      await sequelize.query(`select j.id,j.job_title,j.posted_by_id, countries.name as country,cities.name as city,careerlevels.career_title, minSalary.max_salary as min_salary,maxSalary.max_salary as max_salary,business_types.business_type_name as industry, users.id as user_id, users.companyId as companyId,companies.company_name, companies.company_logo,
      genders.gender_title,jobshifts.job_shift,educationqualifications.qualification,j.degree_title,maxAge.max_age as max_age,minAge.max_age as min_age,maxExperience.max_experience as max_experience,minExperience.max_experience as max_experience,DATE(j.valid_upto) as last_date_apply,j.experience_info ,j.job_description, DATE(j.createdAt) AS posted_at,jobtypes.job_type_title as job_type
      from job j 
      left outer JOIN users on j.posted_by_id = users.id
      left outer JOIN companies on companies.id = users.companyId
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
    `);
    console.log(meta);
    res.json(company_jobs_record);
  } catch (error) {
    next(error);
  }
};


const getJobByTitle = async (req, res, next) => {
  console.log('view all jobs');
  const { title } = req.body;
  try {
    const [company_jobs_record, meta] =
      await sequelize.query(`select j.id,j.job_title,j.posted_by_id, countries.name as country,cities.name as city,careerlevels.career_title, minSalary.max_salary as min_salary,maxSalary.max_salary as max_salary,business_types.business_type_name as industry, users.id as user_id, users.companyId as companyId,companies.company_name, companies.company_logo,
      genders.gender_title,jobshifts.job_shift,educationqualifications.qualification,j.degree_title,maxAge.max_age as max_age,minAge.max_age as min_age,maxExperience.max_experience as max_experience,minExperience.max_experience as max_experience,DATE(j.valid_upto) as last_date_apply,j.experience_info ,j.job_description, DATE(j.createdAt) AS posted_at,jobtypes.job_type_title as job_type
      from job j 
      left outer JOIN users on j.posted_by_id = users.id
      left outer JOIN companies on companies.id = users.companyId
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
     WHERE j.job_title REGEXP '${title}'
    `);
    console.log(meta);
    if(company_jobs_record.length > 0) {
      res.json({ code: 1, jobs: company_jobs_record});
    } else {
      res.json({code: 0, message: "No jobs found with that title"})
    }
  } catch (error) {
    next(error);
  }
};
const getJobByCountry = async (req, res, next) => {
  console.log('view all jobs');
  const { countryId } = req.body;
  try {
    const [company_jobs_record, meta] =
      await sequelize.query(`select j.id,j.job_title,j.posted_by_id, countries.name as country,cities.name as city,careerlevels.career_title, minSalary.max_salary as min_salary,maxSalary.max_salary as max_salary,business_types.business_type_name as industry, users.id as user_id, users.companyId as companyId,companies.company_name, companies.company_logo,
      genders.gender_title,jobshifts.job_shift,educationqualifications.qualification,j.degree_title,maxAge.max_age as max_age,minAge.max_age as min_age,maxExperience.max_experience as max_experience,minExperience.max_experience as max_experience,DATE(j.valid_upto) as last_date_apply,j.experience_info ,j.job_description, DATE(j.createdAt) AS posted_at,jobtypes.job_type_title as job_type
      from job j 
      left outer JOIN users on j.posted_by_id = users.id
      left outer JOIN companies on companies.id = users.companyId
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
     WHERE j.country_id REGEXP '${countryId}'
    `);
    console.log(meta);
    if(company_jobs_record.length > 0) {
      res.json({ code: 1, jobs: company_jobs_record});
    } else {
      res.json({code: 0, message: "No jobs found with that title"})
    }
  } catch (error) {
    next(error);
  }
};
const JobApply = async (req, res, next) => {
  try {
    const { job_id, cv_id } = req.body;
    const { id } = req.user;
    console.log(job_id);
    console.log(id);
    console.log(cv_id);

    const insert_job_apply = await sequelize.query(
      `INSERT INTO job_applicants_cv( job_id,cv_id,applicant_id) VALUES (${job_id},${cv_id},${id})`
    );
    res.json({
      message: 'Applied to job',
    });
  } catch (error) {
    next(error);
  }
};
const CheckJobApply = async (req, res, next) => {
  try {
    const { job_id, cv_id } = req.body;
    const { id } = req.user;

    const [check_job_apply, meta] = await sequelize.query(
      `select cv_id from job_applicants_cv where applicant_id=${id} AND job_id=${job_id}`
    );
    res.json({
      check_job_apply,
    });
  } catch (error) {
    next(error);
  }
};

const AdminGetJobDetails = async (req, res, next) => {
  try {
    const { jobId } = req.body;
    // const jobDetails = await sequelize.query(
    //   `
    //     SELECT job.*, countries.name FROM job INNER JOIN countries ON job.country_id = countries.id LEFT JOIN  WHERE job.id=${jobId}
    //   `
    // );
    const jobDetails = await sequelize.query(
      `
        SELECT job.*, countries.name as country, careerlevels.career_title, cities.name as city FROM ((( job INNER JOIN countries ON job.country_id = countries.id)
        INNER JOIN cities ON job.city_id = cities.id)
        INNER JOIN careerlevels ON job.career_level_id = careerlevels.id
        ) WHERE job.id = ${jobId}
      `
    );
    res.json(jobDetails);
  } catch (error) {
    next(error);
  }
};

const getSaudiJobs = async (req, res, next) => {
  console.log('view all jobs');
  try {
    const [company_jobs_record, meta] =
      await sequelize.query(`select j.id,j.job_title, countries.name as country,cities.name as city,careerlevels.career_title, minSalary.max_salary as min_salary,maxSalary.max_salary as max_salary,business_types.business_type_name as industry,
    genders.gender_title,jobshifts.job_shift,educationqualifications.qualification,j.degree_title,maxAge.max_age as max_age,minAge.max_age as min_age,maxExperience.max_experience as max_experience,minExperience.max_experience as max_experience,DATE(j.valid_upto) as last_date_apply,j.experience_info ,j.job_description, DATE(j.createdAt) AS posted_at,jobtypes.job_type_title as job_type
    from job j 
   left outer JOIN countries on j.country_id=194
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
    `);
    console.log(meta);
    res.json(company_jobs_record);
  } catch (error) {
    next(error);
  }
};

//Admin Controller
const ManageJobs = async (req, res, next) => {
  try {
    res.json({
      message: 'request received',
    });
  } catch (error) {
    next(error);
  }
};
const UpdateJob = async (req, res, next) => {
  try {
    console.log(req.body.values);
    const {
      job_id,
      job_title,
      experience_info,
      supervisor_gender_title,
      co_worker_percentage,
      valid_upto,
      country,
      city,
      career_level,
      min_salary,
      max_salary,
      functional_area,
      gender_title,
      job_shift,
      job_type_title,
      required_qualification,
      degree_title,
      min_experience,
      max_experience,
      min_age,
      max_age,
    } = req.body.values;
    const update_job_record = await sequelize.query(
      `UPDATE job SET job_title='${job_title}',experience_info='${experience_info}',supervisor_gender_title='${supervisor_gender_title}',co_worker_percentage='${co_worker_percentage}',valid_upto='${valid_upto}',country_id=${country},city_id=${city},career_level_id=${career_level},min_salary_id=${min_salary},max_salary_id=${max_salary},functional_area_id=${functional_area},gender_title_id=${gender_title},job_shift_id=${job_shift},job_type_id=${job_type_title},required_qualification_id=${required_qualification},degree_title='${degree_title}',min_experience_id=${min_experience},max_experience_id=${max_experience},min_age_id=${min_age},max_age_id=${max_age} WHERE id =${job_id}`
    );
    res.json({
      message: 'updated',
    });
  } catch (error) {
    next(error);
  }
};
export {
  JobPostController,
  JobMyCompaniesController,
  GetJobOption,
  JobByIdController,
  getApplicantsForJobById,
  JobApplicantStatusUpdate,
  ViewAllJobs,
  JobApply,
  CheckJobApply,
  ManageJobs,
  AdminGetAllJobsController,
  AdminDeleteJob,
  AdminGetJobDetails,
  getSaudiJobs,
  UpdateJob,
  getJobByTitle,
  getJobByCountry,
  getEmployerData
};
