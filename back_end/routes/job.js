import express from "express";
const jobRouter = express.Router();
import auth from "../middlewares/auth/auth.js";
import {
  JobPostController,
  JobMyCompaniesController,
  GetJobOption,
  JobByIdController
} from "../controllers/JobController.js";

// const usermecontroller = require('../controllers/usermecontroller')

// Register/Add Users to DataBase\
jobRouter.post("/", auth, JobPostController);
jobRouter.post("/:id", JobByIdController);
jobRouter.get("/myjobs", auth, JobMyCompaniesController);
jobRouter.get("/jobsoptions", GetJobOption);
// jobRouter.get('/me', auth, usermecontroller)

export default jobRouter;
