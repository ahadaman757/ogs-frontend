import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const Test = sequelize.define('Test', {
    // Model attributes are defined here
    test_title: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    freezeTableName: true
    // Other model options go here
});
export default Test

// `sequelize.define` also returns the mode