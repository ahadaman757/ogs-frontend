import sequelize from "../../config/db.js";
import paginate from "jw-paginate";

const changePrivacyPolicy = async (req, res, next) => {
  try {
    const { content } = req.body;
    const updateData = await sequelize.query(
      `UPDATE privacypolicy SET content = '${content}' WHERE id = 1`
    );
    res.json({ code: 1, message: "Privacy policy content updated" });
  } catch (error) {
    console.log(error);
    res.json({ code: 0, message: "Error updating privacy policy" });
  }
};
const getPrivacyPolicy = async (req, res, next) => {
  try {
    const getData = await sequelize.query(
      `SELECT content FROM privacypolicy WHERE id = 1`
    );
    console.log(getData);
  } catch (error) {
    console.log(error);
    res.json({ code: 0, message: "Error updating privacy policy" });
  }
};

export { changePrivacyPolicy, getPrivacyPolicy };
