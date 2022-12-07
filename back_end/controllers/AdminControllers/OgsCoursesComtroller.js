import sequelize from '../../config/db.js';
import paginate from 'jw-paginate';
import multer from 'multer';
import { application } from 'express';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).any();

const addCourse = async (req, res, next) => {
  try {
    const { course_name, course_description, institute_name } = req.body;
    const addCourseDB = await sequelize.query(
      `INSERT INTO ogs_courses(title, description, institute_name, thumbnail) VALUES ("${course_name}", "${course_description}", "${institute_name}", "Null") `
    );

    res.json({
      code: 1,
      lastId: addCourseDB[0],
      offset: Math.floor(Math.random() * (99 - 1) + 1),
    });
  } catch (err) {
    next(err);
  }
};

const addCourseThumbnail = async (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.json({ code: 1, message: 'File Uploaded' });
  });
};

const updateCourse = async (req, res, next) => {
  try {
    const { offset, fName } = req.body;
    const updateThumb = await sequelize.query(
      `UPDATE ogs_courses SET thumbnail = "${fName}" WHERE id = "${offset}"`
    );
    res.json('Done');
  } catch (error) {
    next(error);
  }
};

const getCourses = async (req, res, next) => {
  try {
    const getAllCourses = await sequelize.query(
      'SELECT * FROM ogs_courses ORDER BY id DESC'
    );
    res.json({ code: 1 });
  } catch (err) {
    next(err);
  }
};

const deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.body;
    const delCourse = await sequelize.query(
      `DELETE FROM ogs_courses WHERE id = '${id}'`
    );
    res.json({ code: 1, message: 'Course deleted' });
  } catch (err) {
    next(err);
  }
};

export {
  addCourse,
  addCourseThumbnail,
  updateCourse,
  getCourses,
  deleteCourse,
};
