import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahadaman@jataq.com',
    pass: 'vhdcqlmzsdwooykz',
  },
});

const sendEmail = async (toSend, handle, handleName, title, text) => {
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
        console.log("error from send mail " , error);
        return { error: error, response: false };
      } else {
        return { error: 'NO error', response: true };
      }
    });
  } else {
    try {
      const mailOptions = {
        from: 'OGS Man Power <ceo@ogsmanpower.com>',
        to: `${toSend}`,
        subject: `${title}`,
        text: `${text}`,
      };
      const info = await transporter.sendMail(mailOptions);
      return { error: "No error", response: true };
    } catch (error) {
      return { error: error, response: false };
    }
  }
};

export default sendEmail;
