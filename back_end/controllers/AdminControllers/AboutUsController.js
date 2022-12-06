import sequelize from "../../config/db.js";
import paginate from "jw-paginate";

const changeAboutUs = async (req, res, next) => {
  try {
    const { content } = req.body;
    const updateData = await sequelize.query(
      `UPDATE about_us SET content = "${content}" WHERE id = 1`
    );
    res.json({ code: 1, message: "About Us content updated" });
  } catch (error) {
    console.log(error);
    res.json({ code: 0, message: "Error updating About Us" });
  }
};
const getAboutUs = async (req, res, next) => {
  try {
    const getData = await sequelize.query(
      `SELECT content FROM about_us WHERE id = 1`
    );
    console.log(getData);
  } catch (error) {
    console.log(error);
    res.json({ code: 0, message: "Error updating About Us" });
  }
};

export { changeAboutUs, getAboutUs };
