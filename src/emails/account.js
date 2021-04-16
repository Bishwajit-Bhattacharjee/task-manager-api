var api_key = process.env.MAILGUN_API_KEY;
var domain = process.env.MAILGUN_DOMAIN;

// console.log(api_key, domain)

var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
 
// mailgun.messages().send(data, function (error, body) {
//   console.log(body);
// });


const sendWelcomeEmail = async (email, name) => {
    try {
        await mailgun.messages().send({
            to: email,
            from: 'bishwajit0020@gmail.com',
            subject: 'Thanks for joining in!',
            text: `Hello ${name}! Hope you like our app!`
        })
    } catch(e) {
        console.log(e)
    }
}

const sendCancellationEmail = async (email, name) => {
    try {
        await mailgun.messages().send({
            to: email,
            from: 'bishwajit0020@gmail.com',
            subject: 'Cancellation email',
            text: `GoodBye ${name}! Hope to see you again!`
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}