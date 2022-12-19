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

export { getCategories };
