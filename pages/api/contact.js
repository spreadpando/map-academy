const sgMail = require('@sendgrid/mail')

export default (req, res) => {
  return new Promise(resolve => {
    const { name, email, comment } = JSON.parse(req.body)
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
    const msg = {
      to: 'mimi@map.academy',
      from: 'no-reply@map.academy',
      replyTo: `${email}`,
      subject: `${name} via map.academy`,
      text: `comment: ${comment}`
    }
    sgMail.send(msg).then(() => {
      res.status(200).send('success')
      return resolve()
    }).catch(err => {
      console.log(err)
      if (err.response) {
      // Extract error msg
        const { message, code, response } = err//eslint-disable-line

        // Extract response msg
        const { headers, body } = response//eslint-disable-line

        console.error(body)
        res.status(500).send('failure')
        return resolve()
      }
    })
  })
}
