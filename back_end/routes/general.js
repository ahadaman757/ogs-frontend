import express from 'express';
const GeneralRouter = express.Router();
import auth from '../middlewares/auth/auth.js';
import {
  getPrivacyPolicy,
  homePageJobsPK,
  getAboutUs,
  getCompanies,
  homePageJobsIN,
} from '../controllers/generalController.js';
// const usermecontroller = require('../controllers/usermecontroller')

// Register/Add Users to DataBase\
GeneralRouter.get('/homePageJobsPK', homePageJobsPK);
GeneralRouter.get('/getPrivacyPolicy', getPrivacyPolicy);
GeneralRouter.get('/getAboutUs', getAboutUs);
GeneralRouter.get('/getCompanies', getCompanies);
GeneralRouter.get('/homePageJobsIN', homePageJobsIN);
// userRouter.get('/me', auth, usermecontroller)

export default GeneralRouter;
