import sequelize from "../../config/db.js";
import { DataTypes } from "sequelize";

const CareerLevel = sequelize.define('careerlevels', {
    // Model attributes are defined here
    career_title: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const MinSalary = sequelize.define('minsalaries', {
    // Model attributes are defined here
    min_salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    // Other model options go here
});
const MaxSalary = sequelize.define('maxsalaries', {
    // Model attributes are defined here
    max_salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    // Other model options go here
});
const FunctionalArea = sequelize.define('functionalareas', {
    // Model attributes are defined here
    functional_area: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const Gender = sequelize.define('genders', {
    // Model attributes are defined here
    gender_title: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const JobType = sequelize.define('jobtypes', {
    // Model attributes are defined here
    job_type_title: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const JobShift = sequelize.define('jobshifts', {
    // Model attributes are defined here
    job_shift: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const EducationQualification = sequelize.define('educationqualifications', {
    // Model attributes are defined here
    qualification: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const Degree = sequelize.define('degrees', {
    // Model attributes are defined here
    job_shift: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const MinExperience = sequelize.define('minexperiences', {
    // Model attributes are defined here
    min_experience: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const MaxExperience = sequelize.define('maxexperiences', {
    // Model attributes are defined here
    max_experience: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const MinAgeRequirement = sequelize.define('minagerequirements', {
    // Model attributes are defined here
    min_age: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
const MaxAgeRequirement = sequelize.define('maxagerequirements', {
    // Model attributes are defined here
    max_age: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});

export default { CareerLevel, MinSalary, MaxSalary, FunctionalArea, Gender, JobType, JobShift, EducationQualification, Degree, MinExperience, MaxExperience, MinAgeRequirement, MaxAgeRequirement }
