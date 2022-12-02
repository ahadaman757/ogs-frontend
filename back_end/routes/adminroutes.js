import express from 'express'
const AdminRouter = express.Router()
import auth from '../middlewares/auth/auth.js'
import AdminAuth from '../middlewares/auth/adminAuth.js'
import { EmployerJobs, ManageJobs, UpdateJob, UpdateJobColumn } from '../controllers/AdminControllers/JobController.js'
import { Deleteuser, GetAllSeekers, GetAllEmployers } from '../controllers/AdminControllers/UserController.js'
// const usermecontroller = require('../controllers/usermecontroller')

// Register/Add Users to DataBase\
AdminRouter.post('/managejobs', AdminAuth, ManageJobs)
AdminRouter.get('/seekers', AdminAuth, GetAllSeekers)
AdminRouter.get('/employers', AdminAuth, GetAllEmployers)
AdminRouter.delete('/users', AdminAuth, Deleteuser)
// jobs

AdminRouter.put('/jobs', AdminAuth, UpdateJob)
AdminRouter.put('/update_job_column', AdminAuth, UpdateJobColumn)
AdminRouter.get('/jobs/:id', AdminAuth, EmployerJobs)


// userRouter.get('/me', auth, usermecontroller) 


export default AdminRouter 
