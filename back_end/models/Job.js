import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import JobPostOptions from "./Categories/JobPostOptions.js";
const Job = sequelize.define('Job', {
    // Model attributes are defined here
    job_title: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    job_description: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    area: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    degree_title: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    experience_info: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    co_worker_percentage: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    valid_upto: {
        type: DataTypes.DATE
    },
    is_active: {
        type: DataTypes.BOOLEAN
    },


}, {
});

// Relations
JobPostOptions.CareerLevel.hasOne(Job)
JobPostOptions.Degree.hasOne(Job)
JobPostOptions.EducationQualification.hasOne(Job)
JobPostOptions.FunctionalArea.hasOne(Job)
JobPostOptions.Gender.hasOne(Job)
JobPostOptions.JobShift.hasOne(Job)
JobPostOptions.JobType.hasOne(Job)
JobPostOptions.MaxAgeRequirement.hasOne(Job)
JobPostOptions.MaxExperience.hasOne(Job)
JobPostOptions.MaxSalary.hasOne(Job)
JobPostOptions.MinAgeRequirement.hasOne(Job)
JobPostOptions.MinExperience.hasOne(Job)
JobPostOptions.MinSalary.hasOne(Job)

export default Job
// `sequelize.define` also returns the model