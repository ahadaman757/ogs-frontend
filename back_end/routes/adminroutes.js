import express from "express";
const AdminRouter = express.Router();
import auth from "../middlewares/auth/auth.js";
import AdminAuth from "../middlewares/auth/adminAuth.js";
import {
  EmployerJobs,
  ManageJobs,
  UpdateJob,
  UpdateJobColumn,
} from "../controllers/AdminControllers/JobController.js";
import {
  Deleteuser,
  GetAllSeekers,
  GetAllEmployers,
} from "../controllers/AdminControllers/UserController.js";
import {
  addNewsEmployers,
  addNewsGeneral,
  addNewsletterSubscriber,
  addNewsSeeker,
  getNewsLetterSubscribers,
} from "../controllers/AdminControllers/NewsletterController.js";

import {
  changePrivacyPolicy,
  getPrivacyPolicy,
} from "../controllers/AdminControllers/PrivacyPolicyController.js";
// const usermecontroller = require('../controllers/usermecontroller')

// Register/Add Users to DataBase\
AdminRouter.post("/managejobs", AdminAuth, ManageJobs);
AdminRouter.get("/seekers", AdminAuth, GetAllSeekers);
AdminRouter.get("/employers", AdminAuth, GetAllEmployers);
AdminRouter.delete("/users", AdminAuth, Deleteuser);
// jobs

AdminRouter.put("/jobs", AdminAuth, UpdateJob);
AdminRouter.put("/update_job_column", AdminAuth, UpdateJobColumn);
AdminRouter.get("/jobs/:id", AdminAuth, EmployerJobs);

// Newsletter
AdminRouter.post(
  "/addnewslettersubscriber",
  AdminAuth,
  addNewsletterSubscriber
);
AdminRouter.post(
  "/getNewsLetterSubscribers",
  AdminAuth,
  getNewsLetterSubscribers
);
AdminRouter.post("/addNewsGeneral", AdminAuth, addNewsGeneral);
AdminRouter.post("/addNewsSeeker", AdminAuth, addNewsSeeker);
AdminRouter.post("/addNewsEmployers", AdminAuth, addNewsEmployers);

//Privacy Policy
AdminRouter.post("/changePrivacyPolicy", AdminAuth, changePrivacyPolicy);
AdminRouter.post("/gePrivacyPolicy", AdminAuth, getPrivacyPolicy);

// userRouter.get('/me', auth, usermecontroller)

export default AdminRouter;
