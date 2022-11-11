import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import Job from "./Job.js";
import Skill from "./Skills.js";

const JobSkill = sequelize.define('JobSkill', {
    JobId: {
        type: DataTypes.INTEGER,
    },
    SkillId: {
        type: DataTypes.INTEGER,
    }

}, {
    freezeTableName: true
});
export default JobSkill