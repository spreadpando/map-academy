import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GM_ADMIN_ADDRESS,
    pass: process.env.GM_PASS
  }
})

export default (req, res) => {
  const mailOptions = {
    from: process.env.GM_ADMIN_ADDRESS,
    to: process.env.GM_CONTACT_REC,
    subject: 'MAP-Contact-Form',
    text: `
    name: ${req.body.name}
    email: ${req.body.email}
    commitment: ${req.body.commitment}
    comments: ${req.body.comments}

    `
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      res.statusCode = 500
    } else {
      console.log('Email sent: ' + info.response)
      res.statusCode = 200
    }
  })
  res.setHeader('Content-Type', 'application/json')
  res.end()
}
