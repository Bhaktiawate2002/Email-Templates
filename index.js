const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
    auth: {
        user: 'bhaktiawate0@gmail.com', // replace with your email address
        pass: 'rparmaiwjyrayoaj', // replace with your password or app-specific password
    },
});

// Set up Handlebars options
const handlebarOptions = {
    viewEngine: {
        extName: '.hbs',
        partialsDir: path.resolve('./Templates'), // Path to your email templates directory
        defaultLayout: false,
    },
    viewPath: path.resolve('./Templates'), // Path to your email templates directory
    extName: '.hbs',
};

// Use the Handlebars plugin with Nodemailer
transporter.use('compile', hbs(handlebarOptions));

// Email options
const mailOptions = {
    from: 'bhaktiawate0@gmail.com', // Sender address
    to: 'pranay.dhabarde@hsmedifice.com', // List of recipients
    subject: 'Warranty Feature', // Subject line
    template: 'warrantyFeature', // Name of the Handlebars template file (email.hbs)
    context: {
        name: 'Bhakti', // Pass variables to the template
    },
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
//rohit.thawani@hsmedifice.com
//box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;