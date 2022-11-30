// import { JoiValidation } from "../validators/JoiValidation.js";
// import Extractdata from "../services/ExtractData.js";
// import Job from "../models/Job.js";
// import JobSkill from "../models/JobSkill.js";
// import Skill from "../models/Skills.js";
// import JobOptions from "../models/Categories/JobPostOptions.js";
// import sequelize from "../config/db.js";
// import JobPostOptions from "../models/Categories/JobPostOptions.js";

const ManageJobs = async (req, res, next) => {
    try {
        res.json({
            message: "request received"
        })
    }
    catch (error) {
        next(error)
    }


}
export { ManageJobs }