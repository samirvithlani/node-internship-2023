const express = require('express');
const router = express.Router();
const mailSendController = require('../controller/MailSendController');
router.post('/send', mailSendController.sendMail);

module.exports = router;
