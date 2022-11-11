import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const Jobs = sequelize.define('Job', {

    job_title: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    job_description: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    experience_info: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    supervisor_gender_title: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    co_worker_percentage: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    valid_upto: {
        type: DataTypes.DATE
        // allowNull: false
    },
    degree_title: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    country_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    city_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    career_level_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    min_salary_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    max_salary_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    functional_area_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    gender_title_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    job_shift_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    required_qualification_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    min_experience_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    max_experience_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    min_age_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    max_age_id: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
}, {
    freezeTableName: true
});

// Relations


export default Jobs
// `sequelize.define` also returns the model