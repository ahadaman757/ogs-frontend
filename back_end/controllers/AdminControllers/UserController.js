import sequelize from "../../config/db.js"

const GetAllSeekers = async (req, res, next) => {
    try {
        const [get_all_seekers_record, meta] = await sequelize.query(`SELECT *, positions.position_title as job_title FROM users
        join positions on position=positions.position_id where userTypeId=1`)
        res.json(get_all_seekers_record)

    }
    catch (error) {
        next(error)
    }

}
const GetAllEmployers = async (req, res, next) => {
    try {
        const [get_all_seekers_record, meta] = await sequelize.query(`SELECT *, positions.position_title as job_title FROM users
      LEFT OUTER  join positions on position=positions.position_id where userTypeId=2`)
        console.log(get_all_seekers_record)
        res.json(get_all_seekers_record)

    }
    catch (error) {
        next(error)
    }

}
const Deleteuser = async (req, res, next) => {
    console.log(req.body)
    try {
        const { user_id } = req.body
        const delete_user_record = await sequelize.query(`Delete from users where id=${user_id}`)
        res.json({ message: "deleted" })
    }

    catch (error) {
        next(error)
    }


}
export { GetAllSeekers, Deleteuser, GetAllEmployers }