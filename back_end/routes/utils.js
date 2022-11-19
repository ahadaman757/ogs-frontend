import express from 'express'
const utilRouter = express.Router()
import auth from '../middlewares/auth/auth.js'
import { registercontroller, imageUpload, signincontroller, ProfileController } from '../controllers/userController.js'
import utilContoller from '../controllers/utilContoller.js'

utilRouter.post('/get_city_by_country_id', utilContoller.GetCityByCountry)
utilRouter.get('/employer_register_options', utilContoller.GetEmployerOptions)


export default utilRouter
