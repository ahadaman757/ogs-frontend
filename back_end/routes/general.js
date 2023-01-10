import express from 'express';
const GeneralRouter = express.Router();
import auth from '../middlewares/auth/auth.js';
import {
  getPrivacyPolicy,
  homePageJobsPK,
  getAboutUs,
  getCompanies,
  homePageJobsIN,
  getCourses,
  GetJobDetailsById,
} from '../controllers/generalController.js';
// const usermecontroller = require('../controllers/usermecontroller')

// Register/Add Users to DataBase\
GeneralRouter.get('/homePageJobsPK', homePageJobsPK);
GeneralRouter.get('/getPrivacyPolicy', getPrivacyPolicy);
GeneralRouter.get('/getAboutUs', getAboutUs);
GeneralRouter.get('/getCompanies', getCompanies);
GeneralRouter.get('/homePageJobsIN', homePageJobsIN);
GeneralRouter.get('/getCourses', getCourses);
GeneralRouter.post('/GetJobDetailsById', GetJobDetailsById);
// userRouter.get('/me', auth, usermecontroller)

export default GeneralRouter;
