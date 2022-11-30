import CustomErrorHandler from "../../services/CustomErrorHandler.js"
import jwt_service from '../../services/JwtService.js'
import User from '../../models/User.js'
import { JWT_SECRET } from "../../config/index.js"
import Company from "../../models/CompanyProfile/Company.js"
const AdminAuth = async (req, res, next) => {
    let authHeader = req.headers.accesstoken;

    if (!authHeader) {
        return next(CustomErrorHandler.unAuthorized("No Access Token"))
    }
    else {
        try {
            const { id } = jwt_service.verifytoken(authHeader, JWT_SECRET)
            console.log("token id:")
            console.log(id)
            console.log("token id:")
            const user = await User.findOne({ where: { id: id }, attributes: { exclude: ['password'] }, include: Company });
            if (user === null) {
                return next(CustomErrorHandler.notFound("User Not Found"))
            } else {
                if (user.userTypeId !== 2) {
                    return next(CustomErrorHandler.notFound("Only Admin are allowed"))
                }
                else {
                    req.user = user
                    return next()
                }
            }
        } catch (err) {
            next(CustomErrorHandler.unAuthorized(err))
        }

    }
}
export default AdminAuth 