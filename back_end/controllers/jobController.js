import { JoiValidation } from "../validators/JoiValidation.js";
import Extractdata from "../services/ExtractData.js";
import Job from "../models/Job.js";
import JobSkill from "../models/JobSkill.js";
import Skill from "../models/Skills.js";
import JobOptions from "../models/Categories/JobPostOptions.js";
import sequelize from "../config/db.js";
import JobPostOptions from "../models/Categories/JobPostOptions.js";
const JobPostController = async (req, res, next) => {
  // get request body for job post
  const body = req.body;
  const { degree_level_id, skill_id } = body;
  // perform validations
  // const { error } = JoiValidation.JobPostValidation(body)
  const OrderedData = Extractdata.JobPost(body);
  console.log(OrderedData.orderedData);
  console.log(req.user.id)
  // insert data in job table
  Job.create({
    ...OrderedData.orderedData,
    posted_by_id: req.user.id,
  })
    .then((response) => {
      console.log(response);
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
      return res.json({ message: "added" });
    })
    .catch((error) => {
      console.log("55555555555");
      console.log(error);
      return next(error);
    });
};
// /Temporary Job Controller end

const JobMyCompaniesController = async (req, res, next) => {
  try {
    // const applpied_count=await sequelize.query(`SELECT COUNT(*) FROM job_applicants_cv WHERE job_id=${REQ.}`)
    const [company_jobs_record, meta] = await sequelize.query(`select j.id,j.job_title, countries.name as country,cities.name as city,careerlevels.career_title, minSalary.max_salary as min_salary,maxSalary.max_salary as max_salary,business_types.business_type_name as industry,
    genders.gender_title,jobshifts.job_shift,educationqualifications.qualification,j.degree_title,educationqualifications.qualification,maxAge.max_age as max_age,minAge.max_age as min_age,maxExperience.max_experience as max_experience,minExperience.max_experience as max_experience,DATE(j.valid_upto) as last_date_apply,j.experience_info ,j.job_description, DATE(j.createdAt) AS posted_at,COUNT(*) as applicants
    from job j 
    JOIN job_applicants_cv on j.id =job_applicants_cv.job_id
    JOIN countries on J.country_id=countries.id
    JOIN cities on J.city_id=cities.id
    JOIN careerlevels on career_level_id=careerlevels.id
    JOIN  maxsalaries minSalary on	min_salary_id =minSalary.id
    JOIN  maxsalaries maxSalary on	max_salary_id =maxSalary.id
    JOIN business_types on functional_area_id = business_types.id
    JOIN genders on gender_title_id  = genders.id
    JOIN jobshifts on j.job_shift_id  = jobshifts.id
    JOIN educationqualifications on j.required_qualification_id=educationqualifications.id
    JOIN maxagerequirements maxAge on j.max_age_id=maxAge.id
    JOIN maxagerequirements minAge on j.min_age_id=minAge.id
    JOIN maxexperiences maxExperience on j.max_experience_id=maxExperience.id
    JOIN maxexperiences minExperience on j.min_experience_id=minExperience.id
    
    
    where posted_by_id = ${req.user.id}`)
    res.json(company_jobs_record)
  }
  catch (error) {
    next(error)

  }
};

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
      "select * from countries"
    );
    const [cities, meta] = await sequelize.query("select * from cities");
    const [position, metapos] = await sequelize.query("select * from positions");
    const [nationality, metanat] = await sequelize.query("select num_code,nationality from nationality");
    const [religion, metareligion] = await sequelize.query("select * from religion");
    const [marital_status, metamarital_status] = await sequelize.query("select * from marital_status");
    const country = results;
    const city = cities;
    const career_level = await JobOptions.CareerLevel.findAll();
    const degree = await JobOptions.Degree.findAll();

    const [functional_area, metafunctional] = await sequelize.query('select * from business_types')
    const gender = await JobOptions.Gender.findAll();
    const job_type = await JobOptions.JobType.findAll();
    const job_shift = await JobOptions.JobShift.findAll();
    const required_qualification = await JobOptions.EducationQualification.findAll();
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
      position
    });
  } catch (error) {
    next(error);
  }
};
const JobByIdController = async (req, res, next) => {

  const job_id = req.params.id

  const job_records = await sequelize.query(`SELECT job.id,job.job_title,countries.name as country,cities.name as city,careerlevels.career_title as required_career_level,minsalaries.min_salary as min_salary, maxsalaries.max_salary as max_salary, functionalareas.functional_area as functional_area, genders.gender_title as gender,jobshifts.job_shift as job_shift, educationqualifications.qualification as required_qualification,minexperiences.min_experience, maxexperiences.max_experience,minagerequirements.min_age,maxagerequirements.max_age
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
  JOIN  maxagerequirements on job.max_age_id=maxagerequirements.id`)

  console.log("JobByIdController")
  res.json(job_records[0])
}
const getApplicantsForJobById = async (req, res, next) => {
  console.log("requesting")
  const { body } = req
  const { job_id } = body
  console.log("query strings")
  console.log(req.query)
  // search for cv in job_applicants_cv table for a given job id
  try {

    const [d_start_date, meta] = await sequelize.query('select MIN(created_at) as start_date from job_applicants_cv')
    const [d_end_date, meta_end] = await sequelize.query('select MAX(created_at) end_date from job_applicants_cv')
    const { start_date = d_start_date[0].start_date, end_date = d_end_date[0].end_date, country = true, city = true, education_level = true, max_experience = true, max_age = 10000, min_age = 0, gender = true } = req.query
    console.log(start_date, end_date)
    console.log(min_age, max_age)

    const query = `select cv.cv_id ,cv.cv_image,cv.first_name,cv.last_name,genders.gender_title,countries.name as country,cities.name as city,DATE_FORMAT(jc.created_at, "%M %d %Y")  as applied_at,educationqualifications.qualification,careerlevels.career_title,business_types.business_type_name,maxexperiences.max_experience,timestampdiff(YEAR,dob,NOW()) as age  from job_applicants_cv jc JOIN cv USING(cv_id) JOIN genders on gender=genders.id
    JOIN countries on country=countries.id
    JOIN cities on city=cities.id
    JOIN educationqualifications on education_level=educationqualifications.id
    JOIN careerlevels on career_level=careerlevels.id
    JOIN business_types on industry=business_types.id
    JOIN maxexperiences on cv.max_experience=maxexperiences.id
    where job_id =${job_id}
    AND jc.created_at BETWEEN '${start_date}' AND '${end_date}'
    AND timestampdiff(YEAR,dob,NOW()) BETWEEN ${min_age} AND ${max_age}
    AND  ( ${country}=true OR country=${country})
    AND  ( ${city}=true OR city=${city})
    AND  ( ${education_level}=true OR education_level=${education_level})
    AND  ( ${gender}=true OR gender=${gender})
    AND  ( ${max_experience}=true OR cv.max_experience=${max_experience})
    `

    const [applicants_record, record] = await sequelize.query(query)
    console.log(applicants_record)
    const applicants_cv_record = applicants_record
    res.json(applicants_cv_record)
  } catch (error) {
    return next(error)
  }
}
export { JobPostController, JobMyCompaniesController, GetJobOption, JobByIdController, getApplicantsForJobById };

