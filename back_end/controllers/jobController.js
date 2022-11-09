import { JoiValidation } from "../validators/JoiValidation.js";
import Extractdata from "../services/ExtractData.js";
import Job from "../models/Job.js";
import JobSkill from "../models/JobSkill.js";
import Skill from "../models/Skills.js";
import JobOptions from '../models/Categories/JobPostOptions.js'
const JobPostController = async (req, res, next) => {
  // get request body for job post
  const body = req.body;
  const { degree_level_id, skill_id } = body;
  // perform validations
  // const { error } = JoiValidation.JobPostValidation(body)
  const OrderedData = Extractdata.JobPost(body);

  // insert data in job table

  Job.create({
    ...OrderedData.orderedData,
    posted_by_id: req.user.id,
    degree_level_id: degree_level_id,
  })
    .then((response) => {
      const skillListStringify = JSON.stringify(skill_id);
      const skillsParsed = JSON.parse(skillListStringify);

      skillsParsed.map((skill) => {
        if (typeof skill == "string") {
          Skill.findOrCreate({
            skill_title: skill,
            where: {
              skill_title: skill,
            },
          })
            .then(([skillRes, created]) => {
              JobSkill.create({
                JobId: response.id,
                SkillId: skillRes.id,
              });
            })
            .catch((error) => {
              return next(error);
            });
        } else {
          console.log(skill);
          JobSkill.create({
            JobId: response.id,
            SkillId: skill,
          })
            .then((reslocal) => {
              console.log("one job skill created");
            })
            .catch((error) => {
              console.log("error occured in map")
              console.log(error)
            });
        }
      });
      return res.json({ message: "added" });
    })
    .catch((error) => {
      return next(error);
    });
};

const JobMyCompaniesController = async (req, res, next) => {
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
const GetJobOption = async (req, res, next) => {
  try {
    const [results, metadata] = await sequelize.query("select * from countries");
    const [cities, meta] = await sequelize.query("select * from cities");
    const country = results
    const city = cities
    const career_level = await JobOptions.CareerLevel.findAll()
    const degree = await JobOptions.Degree.findAll()
    const start_salary = await JobOptions.MinSalary.findAll()
    const end_salary = await JobOptions.MaxSalary.findAll()
    const functional_area = await JobOptions.FunctionalArea.findAll()
    const gender = await JobOptions.Gender.findAll()
    const gender = await JobOptions.Gender.findAll()





  }
  catch (error) {
    next(error)
  }

};
export { JobPostController, JobMyCompaniesController };
