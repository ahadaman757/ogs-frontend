// import { JoiValidation } from "../validators/JoiValidation.js";
// import Extractdata from "../services/ExtractData.js";
// import Job from "../models/Job.js";
// import JobSkill from "../models/JobSkill.js";
// import Skill from "../models/Skills.js";
// import JobOptions from "../models/Categories/JobPostOptions.js";
// import sequelize from "../config/db.js";
// import JobPostOptions from "../models/Categories/JobPostOptions.js";

import sequelize from "../../config/db.js";
import paginate from "jw-paginate";
import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ahadaman@jataq.com",
    pass: "vhdcqlmzsdwooykz",
  },
});

const addNewsletterSubscriber = async (req, res, next) => {
  const { value } = req.body;
  try {
    const checkExsisting = await sequelize.query(
      `SELECT * FROM newsletter_subscribers WHERE email = '${value}'`
    );
    console.log(checkExsisting[0]);
    if (checkExsisting[0].length > 0) {
      res.json({
        code: 0,
        message: "Email already exists",
      });
    } else {
      // CHECK IF USER IS A REGISTERED USER
      const checkRegUser = await sequelize.query(
        `SELECT email FROM users WHERE email = '${value}'`
      );
      if (checkRegUser[0].length > 0) {
        res.json({
          code: 0,
          message:
            "This email belongs to a registered user which means he is already subscribed to your emails.",
        });
      } else {
        const insertData = await sequelize.query(
          `INSERT INTO newsletter_subscribers (email) VALUES('${value}')`
        );
        res.json({
          code: 1,
          message: "User Added",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

const getNewsLetterSubscribers = async (req, res, next) => {
  const { page } = req.body;

  const userRegEmails = await sequelize.query(`SELECT email FROM users`);
  const newsletterSubEmail = await sequelize.query(
    `SELECT email FROM newsletter_subscribers`
  );
  const finalArray = userRegEmails[0].concat(newsletterSubEmail[0]);
  userRegEmails[0].concat(newsletterSubEmail[0]);

  //   const page = parseInt(req.query.page) || 1;
  const pageSize = 15;
  console.log(page);
  const pager = paginate(finalArray.length, page, pageSize);

  const pageOfItems = finalArray.slice(pager.startIndex, pager.endIndex + 15);

  res.json({ page, pageOfItems });
};

const addNewsGeneral = async (req, res, next) => {
  const { data } = req.body;
  try {
    const insertEmail = await sequelize.query(
      `INSERT INTO newsletter_general (data) VALUES('${data}')`
    );
    const userRegEmails = await sequelize.query(`SELECT email FROM users`);
    const newsletterSubEmail = await sequelize.query(
      `SELECT email FROM newsletter_subscribers`
    );
    const finalArray = userRegEmails[0].concat(newsletterSubEmail[0]);

    for (let i = 0; i < finalArray.length; i++) {
      console.log("Email Sent to => " + finalArray[i].email);
    }

    // const handlebarOptions = {
    //   viewEngine: {
    //     partialsDir: path.resolve("./controllers/AdminControllers/template"),
    //     defaultLayout: false,
    //   },
    //   viewPath: path.resolve("./controllers/AdminControllers/template"),
    // };
    // transporter.use("compile", hbs(handlebarOptions));

    // const mailOptions = {
    //   from: "Contact Form <dr.irfananwarspinesurgeon@gmail.com>",
    //   to: "ahadaman757@gmail.com",
    //   subject: "New contact form",
    //   template: "email",
    //   context: {
    //     para: data,
    //   },
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     res.json("done");
    //   }
    // });
  } catch (error) {
    next(error);
  }
};
const addNewsSeeker = async (req, res, next) => {
  const { data } = req.body;
  try {
    const insertEmail = await sequelize.query(
      `INSERT INTO newsletter_general (data) VALUES('${data}')`
    );
    const userRegEmails = await sequelize.query(
      `SELECT email FROM users WHERE userTypeId = '1'`
    );
    const finalArray = userRegEmails[0];

    console.log("Received");

    for (let i = 0; i < finalArray.length; i++) {
      console.log("Email Sent to => " + finalArray[i].email);
    }

    // const handlebarOptions = {
    //   viewEngine: {
    //     partialsDir: path.resolve("./controllers/AdminControllers/template"),
    //     defaultLayout: false,
    //   },
    //   viewPath: path.resolve("./controllers/AdminControllers/template"),
    // };
    // transporter.use("compile", hbs(handlebarOptions));

    // const mailOptions = {
    //   from: "Contact Form <dr.irfananwarspinesurgeon@gmail.com>",
    //   to: "ahadaman757@gmail.com",
    //   subject: "New contact form",
    //   template: "email",
    //   context: {
    //     para: data,
    //   },
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     res.json("done");
    //   }
    // });
  } catch (error) {
    next(error);
  }
};
const addNewsEmployers = async (req, res, next) => {
  const { data } = req.body;
  try {
    const insertEmail = await sequelize.query(
      `INSERT INTO newsletter_general (data) VALUES('${data}')`
    );
    const userRegEmails = await sequelize.query(
      `SELECT email FROM users WHERE userTypeId = '2'`
    );
    const finalArray = userRegEmails[0];

    console.log("Received");

    for (let i = 0; i < finalArray.length; i++) {
      console.log("Email Sent to => " + finalArray[i].email);
    }

    // const handlebarOptions = {
    //   viewEngine: {
    //     partialsDir: path.resolve("./controllers/AdminControllers/template"),
    //     defaultLayout: false,
    //   },
    //   viewPath: path.resolve("./controllers/AdminControllers/template"),
    // };
    // transporter.use("compile", hbs(handlebarOptions));

    // const mailOptions = {
    //   from: "Contact Form <dr.irfananwarspinesurgeon@gmail.com>",
    //   to: "ahadaman757@gmail.com",
    //   subject: "New contact form",
    //   template: "email",
    //   context: {
    //     para: data,
    //   },
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     res.json("done");
    //   }
    // });
  } catch (error) {
    next(error);
  }
};
export {
  addNewsletterSubscriber,
  getNewsLetterSubscribers,
  addNewsGeneral,
  addNewsSeeker,
  addNewsEmployers,
};
