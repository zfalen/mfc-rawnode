const email = require('emailjs');

module.exports = (sender_name, sender_email, sender_subject, sender_body) => {

  let email_server = email.server.connect({
   user: process.env.EMAIL_USERNAME,
   password: process.env.EMAIL_PASSWORD,
   host: "smtp.googlemail.com",
   ssl: true,
   port: 465
  });

  return new Promise((resolve, reject) => {
    let message = {
     text:    "i hope this works",
     from:    `${sender_name} <${sender_email}>`,
     to:      `<${process.env.EMAIL_USERNAME}>`,
     subject: sender_subject,
     attachment: {
       data: `<html> ${sender_body} </html>`,
       alternative: true
     }
    };

    // send the message and get a callback with an error or details of the message that was sent
    email_server.send(message, (err, message) => {
      if (err) {
        reject(err);
      } else {
        resolve(message);
      }
    });
  });
}
