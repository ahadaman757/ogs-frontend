import express from 'express'
const userRouter = express.Router()
import auth from '../middlewares/auth/auth.js'
import { registercontroller, imageUpload, signincontroller, ProfileController, ResetPassword, UpdateProfile } from '../controllers/userController.js'

// const usermecontroller = require('../controllers/usermecontroller')

// Register/Add Users to DataBase\
userRouter.post('/', imageUpload, registercontroller)
userRouter.post('/signin', signincontroller)
userRouter.get('/me', auth, ProfileController)
userRouter.post('/resetpassword', auth, ResetPassword)
userRouter.post('/employer_update_profile', auth, imageUpload, UpdateProfile)

// userRouter.get('/me', auth, usermecontroller) 


export default userRouter 
