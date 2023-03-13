import express from "express";
const GeneralRouter = express.Router();
import auth from "../middlewares/auth/auth.js";
import {
  getPrivacyPolicy,
  homePageJobsPK,
  getAboutUs,
  getCompanies,
  homePageJobsIN,
  getCourses,
  GetJobDetailsById,
  verifyEmail,
  getCountries,
  getAdditionalFiles,
  whatsAppCode,
  getIndustries,
} from "../controllers/generalController.js";
// const usermecontroller = require('../controllers/usermecontroller')

// Register/Add Users to DataBase\
GeneralRouter.get("/homePageJobsPK", homePageJobsPK);
GeneralRouter.get("/getPrivacyPolicy", getPrivacyPolicy);
GeneralRouter.get("/getAboutUs", getAboutUs);
GeneralRouter.get("/getCompanies", getCompanies);
GeneralRouter.get("/homePageJobsIN", homePageJobsIN);
GeneralRouter.get("/getCourses", getCourses);
GeneralRouter.post("/GetJobDetailsById", GetJobDetailsById);
GeneralRouter.post("/verifyEmail", verifyEmail);
GeneralRouter.get("/getCountries", getCountries);
GeneralRouter.get("/getIndustries", getIndustries);
GeneralRouter.get("/getAdditionalFiles", getAdditionalFiles);
GeneralRouter.post("/verifyPhone", whatsAppCode);
// userRouter.get('/me', auth, usermecontroller)

export default GeneralRouter;
