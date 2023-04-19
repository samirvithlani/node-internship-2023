const mailer = require('../util/mailer')

const sendMail = async (req, res) => {
    const {to,subject,message} = req.body
    const result = await mailer.sendMail(to,subject,message)
    res.status(200).json({
        message: 'Mail sent successfully',
        result: result
    })
}
module.exports = {sendMail}