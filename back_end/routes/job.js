import express from "express";
const jobRouter = express.Router();
import auth from "../middlewares/auth/auth.js";
import AdminAuth from "../middlewares/auth/adminAuth.js";
import {
  JobPostController,
  JobMyCompaniesController,
  GetJobOption,
  JobByIdController,
  getApplicantsForJobById,
  JobApplicantStatusUpdate,
  ViewAllJobs,
  JobApply,
  CheckJobApply,
  AdminGetAllJobsController,
  AdminDeleteJob,
  AdminGetJobDetails,
  getSaudiJobs,
  UpdateJob,
  getJobByTitle,
  getJobByCountry,
  getEmployerData,
  getBoxesDetails,
  changeCVState,
} from "../controllers/jobController.js";
// /main route =/jobs
// const usermecontroller = require('../controllers/usermecontroller')

// Register/Add Users to DataBase\
jobRouter.post("/", auth, JobPostController);
jobRouter.get("/myjobs", auth, JobMyCompaniesController);
jobRouter.get("/jobsoptions", GetJobOption);
jobRouter.post("/jobapplicants", getApplicantsForJobById);
jobRouter.post("/job_applicants_status_update", JobApplicantStatusUpdate);
jobRouter.get("/view_all_jobs", ViewAllJobs);
jobRouter.get("/getSaudiJobs", getSaudiJobs);
jobRouter.post("/jobapply", auth, JobApply);
jobRouter.post("/checkjobapply", auth, CheckJobApply);
jobRouter.post("/getJobByTitle", getJobByTitle);
jobRouter.put("/employerjobs", auth, UpdateJob);
jobRouter.post("/getJobByCountry", getJobByCountry);
// jobRouter.post("/jobapply", JobApply);
// jobRouter.post("/:id", JobByIdController);
jobRouter.get("/admingetjobs", AdminAuth, AdminGetAllJobsController);
jobRouter.post("/admindeletejob", AdminAuth, AdminDeleteJob);
jobRouter.post("/admingetjobdetail", AdminAuth, AdminGetJobDetails);
jobRouter.post("/getjobdetail", auth, AdminGetJobDetails);
jobRouter.get("/getEmployerData", auth, getEmployerData);
jobRouter.post("/getBoxesDetails", auth, getBoxesDetails);
jobRouter.post("/changeCVState", auth, changeCVState);
// jobRouter.get('/me', auth, usermecontroller)

export default jobRouter;
