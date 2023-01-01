import express from 'express';
const app = express();
const port = 3000;
import UserType from './models/UserType.js';
import User from './models/User.js';
import BusinessType from './models/CompanyProfile/BusinessType.js';
import Company from './models/CompanyProfile/Company.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import Jobs from './models/Job.js';
import JobSkill from './models/JobSkill.js';
const https = require('https');
const fs = require('fs');

var options = {
  key: fs.readFileSync('/var/www/html/private.key'),
  cert: fs.readFileSync('/var/www/html/mycert.pem'),
};

// var html_to_pdf = require('html-pdf-node');

// Environment Variables
import { DEV_PORT } from './config/index.js';
// MiddleWares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('./images'));
app.use('/public', express.static('./public'));
app.use('/logo', express.static('./logo'));
// Temporary start
// Jobs.sync({
//     force: true
// }).then(res => {
//     console.log("error")
// }).catch(error => {
//     console.log(error)
// })
// Temporary end
// Relations Start
// one user type has many user accounts
UserType.hasMany(User);
User.belongsTo(UserType);
// Business Type(streams) Realtions with companies
BusinessType.hasMany(Company);
Company.belongsTo(BusinessType);
Company.belongsTo(User, {
  onDelete: 'CASCADE',
  onUpdate: 'RESTRICT',
});
User.belongsTo(Company);

// Jobs and Degree Level
// User.hasMany(Job, {
//     foreignKey: 'posted_by_id'
// })

// Skill Table Relation
// Job.belongsToMany(Skill, { through: JobSkill });
// Skill.belongsToMany(Job, { through: JobSkill });
// Relations End

// import Routes start
import userRouter from './routes/user.js';
import jobRouter from './routes/job.js';
import errorhandler from './middlewares/errorHandler.js';
import utilRouter from './routes/utils.js';
import Skill from './models/Skills.js';
import AdminRouter from './routes/adminroutes.js';
import AdminAuth from './middlewares/auth/adminAuth.js';
import GeneralRouter from './routes/general.js';

// import Routes end

// /register

app.use('/test', (req, res, next) => {
  console.log(req.body);
});

app.use('/', utilRouter);
// consume routes start
app.use('/users', userRouter);
app.use('/admin', AdminAuth, AdminRouter);
app.use('/jobs', jobRouter);
app.use('/general', GeneralRouter);
// app.use("/userlogin", userLogin);
// consume routes end

app.use(errorhandler);

app
  .listen(3002, () => console.log(`OGS server started on port !`))
  .on('error', function (err) {
    console.log('server start error');
    console.log(err);
  });
https.createServer(options, app).listen(3002, function (err) {
  console.log('server start error');
  console.log(err);
});
