import express from "express";
const GeneralRouter = express.Router();
import auth from "../middlewares/auth/auth.js";
import { homePageJobsPK } from "../controllers/generalController.js";
// const usermecontroller = require('../controllers/usermecontroller')

// Register/Add Users to DataBase\
GeneralRouter.get("/homePageJobsPK", homePageJobsPK);

// userRouter.get('/me', auth, usermecontroller)

export default GeneralRouter;
