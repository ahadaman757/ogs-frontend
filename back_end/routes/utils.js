import express from 'express'
const utilRouter = express.Router()
import auth from '../middlewares/auth/auth.js'
import { registercontroller, imageUpload, signincontroller, ProfileController, } from '../controllers/userController.js'
import { CreateCv, UpdateCv, getSeekerCVById } from '../controllers/CvContoller.js'
import utilContoller from '../controllers/utilContoller.js'
import AdminAuth from '../middlewares/auth/adminAuth.js'

utilRouter.post('/get_city_by_country_id', utilContoller.GetCityByCountry)
utilRouter.post('/get_job_titles_by_industry_id', utilContoller.GetJobTitlesByIndustry)
utilRouter.get('/employer_register_options', utilContoller.GetEmployerOptions)
utilRouter.post('/createcv', auth, imageUpload, CreateCv)

utilRouter.post('/update_cv', auth, imageUpload, UpdateCv)
utilRouter.get('/skills_for_job_by_id/:id', utilContoller.SkillsForJobByid)
utilRouter.get('/getcvforuser/:user_id', AdminAuth, getSeekerCVById)

export default utilRouter
