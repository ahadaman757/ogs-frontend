import { JoiValidation } from "../validators/JoiValidation.js";
import Extractdata from "../services/ExtractData.js";
import Job from "../models/Job.js";
import JobSkill from "../models/JobSkill.js";
import Skill from "../models/Skills.js";
import JobOptions from "../models/Categories/JobPostOptions.js";
import sequelize from "../config/db.js";
import JobPostOptions from "../models/Categories/JobPostOptions.js";
const JobPostController = async (req, res, next) => {
  console.log("recsdsd");

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
  console.log(req.user.id)
  try {
    const AllJobs = await Job.findAll({
      where: {
        posted_by_id: req.user.id
      }
    })
    res.json(AllJobs)
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
    const country = results;
    const city = cities;
    const career_level = await JobOptions.CareerLevel.findAll();
    const degree = await JobOptions.Degree.findAll();
    const min_salary = await JobOptions.MinSalary.findAll();
    const max_salary = await JobOptions.MaxSalary.findAll();
    const [functional_area, metafunctional] = await sequelize.query('select * from business_types')
    const gender = await JobOptions.Gender.findAll();
    const job_type = await JobOptions.JobType.findAll();
    const job_shift = await JobOptions.JobShift.findAll();
    const required_qualification = await JobOptions.EducationQualification.findAll();
    const min_experience = await JobOptions.MinExperience.findAll();
    const max_experience = await JobOptions.MaxExperience.findAll();
    const min_age = await JobOptions.MinAgeRequirement.findAll();
    const max_age = await JobOptions.MaxAgeRequirement.findAll();
    res.json({
      job_type,
      country,
      career_level,
      degree,
      min_salary,
      max_salary,
      functional_area,
      job_shift,
      gender,
      job_shift,
      required_qualification,
      max_experience,
      min_experience,
      min_age,
      max_age,
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

  const { body } = req
  const { job_id } = body

  // search for cv in job_applicants_cv table for a given job id
  try {
    const applicants_record = await sequelize.query(`select cv.cv_id ,cv.cv_image,cv.first_name,cv.last_name,genders.gender_title,countries.name as country,cities.name as city,DATE_FORMAT(jc.created_at, "%M %d %Y")  as applied_at,educationqualifications.qualification,careerlevels.career_title,business_types.business_type_name,maxexperiences.max_experience,timestampdiff(YEAR,dob,NOW()) as age  from job_applicants_cv jc
    JOIN cv USING(cv_id)
    JOIN genders on gender=genders.id
    JOIN countries on country=countries.id
    JOIN cities on city=cities.id
    JOIN educationqualifications on education_level=educationqualifications.id
    JOIN careerlevels on career_level=careerlevels.id
    JOIN business_types on industry=business_types.id
    JOIN maxexperiences on cv.max_experience=maxexperiences.id
    where job_id =${job_id}`)
    const applicants_cv_record = applicants_record[0]

    res.json(applicants_cv_record)
  } catch (error) {
    return next(error)
  }
}
export { JobPostController, JobMyCompaniesController, GetJobOption, JobByIdController, getApplicantsForJobById };

