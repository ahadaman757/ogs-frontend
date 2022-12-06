import express from "express";
const GeneralRouter = express.Router();
import auth from "../middlewares/auth/auth.js";
import {
  getPrivacyPolicy,
  homePageJobsPK,
} from "../controllers/generalController.js";
// const usermecontroller = require('../controllers/usermecontroller')

// Register/Add Users to DataBase\
GeneralRouter.get("/homePageJobsPK", homePageJobsPK);
GeneralRouter.get("/getPrivacyPolicy", getPrivacyPolicy);
// userRouter.get('/me', auth, usermecontroller)

export default GeneralRouter;
