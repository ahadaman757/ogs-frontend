import { JoiValidation } from "../validators/JoiValidation.js";
import Extractdata from "../services/ExtractData.js";
import Job from "../models/Job.js";
import JobSkill from "../models/JobSkill.js";
import Skill from "../models/Skills.js";
import JobOptions from "../models/Categories/JobPostOptions.js";
import sequelize from "../config/db.js";
import JobPostOptions from "../models/Categories/JobPostOptions.js";
// const JobPostControllers = async (req, res, next) => {
//   console.log("recsdsd")

//   // get request body for job post
//   const body = req.body;
//   const { degree_level_id, skill_id } = body;
//   // perform validations
//   // const { error } = JoiValidation.JobPostValidation(body)
//   const OrderedData = Extractdata.JobPost(body);
//   console.log(OrderedData.orderedData)
//   // insert data in job table
//   Job.create({
//     ...OrderedData.orderedData,
//     posted_by_id: req.user.id,
//   })
//     .then((response) => {
//       console.log(response)
//       const skillListStringify = JSON.stringify(skill_id);
//       const skillsParsed = JSON.parse(skillListStringify);

//       skillsParsed.map((skill) => {
//         if (typeof skill == "string") {
//           Skill.findOrCreate({
//             skill_title: skill,
//             where: {
//               skill_title: skill,
//             },
//           })
//             .then(([skillRes, created]) => {
//               JobSkill.create({
//                 JobId: response.id,
//                 SkillId: skillRes.id,
//               });
//             })
//             .catch((error) => {
//               return next(error);
//             });
//         } else {
//           console.log(skill);
//           JobSkill.create({
//             JobId: response.id,
//             SkillId: skill,
//           })
//             .then((reslocal) => {
//               console.log("one job skill created");
//             })
//             .catch((error) => {
//               console.log("error occured in map")
//               console.log(error)
//             });
//         }
//       });
//       return res.json({ message: "added" });
//     })
//     .catch((error) => {
//       console.log("55555555555")
//       console.log(error)
//       return next(error);
//     });
// };

// /Temporary Job Controller start
const JobPostController = async (req, res, next) => {
  console.log("recsdsd");

  // get request body for job post
  const body = req.body;
  const { degree_level_id, skill_id } = body;
  // perform validations
  // const { error } = JoiValidation.JobPostValidation(body)
  const OrderedData = Extractdata.JobPost(body);
  console.log(OrderedData.orderedData);
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
    const functional_area = await JobOptions.FunctionalArea.findAll();
    const gender = await JobOptions.Gender.findAll();
    const job_type = await JobOptions.JobType.findAll();
    const job_shift = await JobOptions.JobShift.findAll();
    const required_qualification =
      await JobOptions.EducationQualification.findAll();
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
  const job_record = await sequelize.query(`select * from job where id='83'`)

  console.log(job_id)
  res.json(job_record[0])
}
export { JobPostController, JobMyCompaniesController, GetJobOption, JobByIdController };

