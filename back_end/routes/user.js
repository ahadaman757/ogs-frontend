import express from 'express';
const userRouter = express.Router();
import auth from '../middlewares/auth/auth.js';
import {
  sendEmployerRegistrationEmail,
  registercontroller,
  imageUpload,
  signincontroller,
  ProfileController,
  ResetPassword,
  UpdateProfile,
  passportUpload,
  SeekerProfileController,
} from '../controllers/userController.js';
import { getSeekerCvs, CreateCv } from '../controllers/CvContoller.js';
// const usermecontroller = require('../controllers/usermecontroller')

// Register/Add Users to DataBase\
userRouter.post('/', imageUpload, registercontroller);
userRouter.post('/signin', signincontroller);
userRouter.get('/me', auth, ProfileController);
userRouter.get('/seeker_me', auth, SeekerProfileController);
userRouter.get('/my_cvs', auth, getSeekerCvs);
userRouter.get(
  '/sendEmployerRegistrationEmail',
  auth,
  sendEmployerRegistrationEmail
);
userRouter.post('/resetpassword', auth, ResetPassword);
userRouter.post('/employer_update_profile', auth, imageUpload, UpdateProfile);

// userRouter.get('/me', auth, usermecontroller)

export default userRouter;
