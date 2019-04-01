const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'ppyxmw@gmail.com',
    subject: 'Thank you for joining',
    text: `Hello ${name}, Welcome to the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'ppyxmw@gmail.com',
    subject: 'Sorry to say goodbye',
    text: `Hello ${name}, Is there anything we can do to keep you?.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
