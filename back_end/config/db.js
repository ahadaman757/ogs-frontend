import { DB_NAME, DB_HOST, DB_USER } from './index.js';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(DB_NAME, DB_USER, '', {
    dialect: 'mysql',
    host: DB_HOST,
    logging: false
});

export default sequelize