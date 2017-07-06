const email = require('emailjs');

let email_server = email.server.connect({
 user: process.env.EMAIL_USERNAME,
 password: process.env.EMAIL_PASSWORD,
 host: "smtp.googlemail.com",
 ssl: true,
 port: 465
});

module.exports = (sender_name, sender_email, sender_subject, sender_body) => {
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
  email_server.send(message, (err, message) => { console.log(err || message); });
}
