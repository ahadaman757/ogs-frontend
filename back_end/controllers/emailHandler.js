import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahadaman@jataq.com',
    pass: 'vhdcqlmzsdwooykz',
  },
});

const sendEmail = (toSend, handle, handleName, name, title, text) => {
  if (handle === true && handleName != '') {
    const handlebarOptions = {
      viewEngine: {
        partialsDir: path.resolve('./controllers/AdminControllers/template'),
        defaultLayout: false,
      },
      viewPath: path.resolve('./controllers/AdminControllers/template'),
    };
    transporter.use('compile', hbs(handlebarOptions));
    const mailOptions = {
      from: 'OGS Man Power <ceo@ogsmanpower.com>',
      to: `${email}`,
      subject: 'Reset your password!',
      template: `${handleName}`,
      context: {
        para: `${data}`,
      },
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return false;
      } else {
        return true;
      }
    });
  } else {
    const mailOptions = {
      from: 'OGS Man Power <ceo@ogsmanpower.com>',
      to: `${toSend}`,
      subject: `${title}`,
      text: `${text}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return false;
      } else {
        return true;
      }
    });
  }
};

export default sendEmail;
