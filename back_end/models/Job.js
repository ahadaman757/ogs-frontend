import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const Job = sequelize.define('Job', {
    // Model attributes are defined here
    job_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    job_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: DataTypes.STRING,
        allowNull: false
    },
    career_level: {
        type: DataTypes.STRING,
        allowNull: false
    },

    start_salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    end_salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    functional_area: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['male', 'female', 'both']
    },
    job_shift: {
        type: DataTypes.STRING,
        allowNull: false
    },
    required_qualification: {
        type: DataTypes.STRING,
        allowNull: false
    },
    degree_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    min_experience: {
        type: DataTypes.STRING,
        allowNull: false
    },
    max_experience: {
        type: DataTypes.STRING,
        allowNull: false
    },
    experience_info: {
        type: DataTypes.STRING,
        allowNull: false
    },
    min_age_requirement: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    max_age_requirement: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    supervisor_gender: {
        type: DataTypes.ENUM,
        values: ['male', 'female', 'both']
    },
    co_worker_percentage: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valid_upto: {
        type: DataTypes.DATE
    },
    is_active: {
        type: DataTypes.BOOLEAN
    },


}, {
});
export default Job

// `sequelize.define` also returns the model