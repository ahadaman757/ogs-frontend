import CustomErrorHandler from '../services/CustomErrorHandler.js'
import { JoiValidation } from '../validators/JoiValidation.js'
import { VALID_MODE } from '../config/index.js'
import User from '../models/User.js'
import Extractdata from '../services/ExtractData.js'
import errorHandler from '../middlewares/errorHandler.js'
import multer from 'multer'
import path from 'path'
import Company from '../models/CompanyProfile/Company.js'
import bcrypt from 'bcrypt'
import { REFRESH_SECRET, JWT_SECRET } from '../config/index.js'
import RefreshToken from '../models/refreshToken.js'
import { decryptPassword } from '../services/Main.js'
import jwt_service from '../services/JwtService.js'
import sequelize from '../config/db.js'

const GetCityByCountry = async (req, res, next) => {
    try {
        const country_id = req.body.country_id
        const [cities, metadata] = await sequelize.query(`select id,name from cities where country_id = ${country_id} `);
        res.json(cities)
    }
    catch (error) {
        return next(error)
    }

}

export default { GetCityByCountry }