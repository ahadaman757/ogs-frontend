import sequelize from "../../config/db.js";
import { DataTypes } from "sequelize";

const CareerLevel = sequelize.define('CareerLevel', {
    // Model attributes are defined here
    career_title: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const MinSalary = sequelize.define('MinSalary', {
    // Model attributes are defined here
    min_salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    // Other model options go here
});
const MaxSalary = sequelize.define('MaxSalary', {
    // Model attributes are defined here
    max_salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    // Other model options go here
});
const FunctionalArea = sequelize.define('FunctionalArea', {
    // Model attributes are defined here
    functional_area: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const Gender = sequelize.define('Gender', {
    // Model attributes are defined here
    gender_title: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const JobType = sequelize.define('JobType', {
    // Model attributes are defined here
    job_type_title: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const JobShift = sequelize.define('JobShift', {
    // Model attributes are defined here
    job_shift: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const EducationQualification = sequelize.define('EducationQualification', {
    // Model attributes are defined here
    qualification: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const Degree = sequelize.define('Degree', {
    // Model attributes are defined here
    job_shift: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const MinExperience = sequelize.define('MinExperience', {
    // Model attributes are defined here
    min_experience: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const MaxExperience = sequelize.define('MaxExperience', {
    // Model attributes are defined here
    max_experience: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const MinAgeRequirement = sequelize.define('MinAgeRequirement', {
    // Model attributes are defined here
    min_age: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const MaxAgeRequirement = sequelize.define('MaxAgeRequirement', {
    // Model attributes are defined here
    max_age: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});

export default { CareerLevel, MinSalary, MaxSalary, FunctionalArea, Gender, JobType, JobShift, EducationQualification, Degree, MinExperience, MaxExperience, MinAgeRequirement, MaxAgeRequirement }
