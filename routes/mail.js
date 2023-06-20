const express = require('express');
const router = express.Router();
const { sendMail } = require('../controllers/mail.js');

router.route('/').post(sendMail);

module.exports = router;