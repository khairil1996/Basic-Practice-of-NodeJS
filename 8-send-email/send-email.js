// send-email

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth:{
		user: 'khairilrajaie@gmail.com',
		pass:'****'
	}
})

var mailOptions = {
	from: 'khairilrajaie@gmail.com',
	to: 'khairilrajaie@gmail.com' ,
	subject: 'sending Email using Node.js',
	text: `hi nice to meet you`
}

transporter.sendMail(mailOptions, function(error, info){
	if (error){
		console.log(error);
	} else {
		console.log('email send: ' + info.response)
	}
})