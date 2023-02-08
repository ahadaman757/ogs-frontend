import sequelize from '../../config/db.js';
import paginate from 'jw-paginate';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

const getCategories = async (req, res, next) => {
  const { page } = req.body;
  const mainCategories = await sequelize.query('SELECT * FROM category');
  const pageSize = 15;
  const pager = paginate(mainCategories[0].length, page, pageSize);

  const pageOfItems = mainCategories[0].slice(
    pager.startIndex,
    pager.endIndex + 15
  );

  res.json({ page, pageOfItems });
};

const getAdditionalOptions = async (req, res, next) => {
  const { page } = req.body;
  const mainCategories = await sequelize.query('SELECT * FROM additional');
  const pageSize = 15;
  const pager = paginate(mainCategories[0].length, page, pageSize);

  const pageOfItems = mainCategories[0].slice(
    pager.startIndex,
    pager.endIndex + 15
  );

  res.json({ page, pageOfItems });
};

const deleteJob = async (id) => {
  if (id !== '') {
    try {
      const deleteJob = await sequelize.query(
        `DELETE FROM category WHERE id = ${id}`
      );
      return 1;
    } catch (err) {
      return 0;
    }
  } else {
    return 0;
  }
};

const getCatById = async (id) => {
  if (id !== '') {
    try {
      const getById = await sequelize.query(
        `SELECT * FROM category WHERE id = ${id}`
      );
      return getById[0];
    } catch (err) {
      return err;
    }
  }
};

const updateCatName = async (id, name) => {
  if (id !== '' && name !== '') {
    try {
      const updateName = await sequelize.query(
        `UPDATE category SET name="${name}" WHERE id = '${id}'`
      );
      return 1;
    } catch (err) {
      return 0;
    }
  }
};

const addSubCategory = async (id, catName) => {
  if (id !== '' && catName !== '') {
    try {
      const addCat = await sequelize.query(
        `INSERT INTO sub_category(name, description, cat_id, dtm, status) VALUES('${catName}', '', '${id}', '', '1')`
      );
      return 1;
    } catch (err) {
      return 0;
    }
  }
};
const getSubCategories = async (id) => {
  if (id !== '') {
    try {
      const getCats = await sequelize.query(
        `SELECT * FROM sub_category WHERE id = '${id}'`
      );
      return getCats[0];
    } catch (err) {
      return 0;
    }
  }
};

const additionalChangeStatus = async (req, res, next) => {
  try {
    const { id, status } = req.body;
    const updateStatus = await sequelize.query(`UPDATE additonal SET display=${status} WHERE id='${id}'`);
    res.json({code: 1, message: "Updated!"})
  } catch (error) {
    res.json({code: 0, message: error})
  }
}

const ManageCategory = async (req, res, next) => {
  const { action, jobId } = req.body;
  let code;
  switch (action) {
    case 'delete':
      code = await deleteJob(jobId);
      res.json({ code: 1 });
      break;
    case 'getcatbyid':
      code = await getCatById(jobId);
      res.json({ res: 1, code });
      break;
    case 'updatecatname':
      const { newName } = req.body;
      code = await updateCatName(jobId, newName);
      res.json({ res: 1, code });
      break;
    case 'addSubCategory':
      const { catName } = req.body;
      code = await addSubCategory(jobId, catName);
      res.json({ res: 1, code });
      break;
    case 'getsubcategories':
      code = await getSubCategories(jobId);
      res.json({ res: 1, code });
    default:
      break;
  }
};

export { getCategories, ManageCategory, getAdditionalOptions,additionalChangeStatus };
