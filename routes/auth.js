const express = require('express');
const { signup, verifyOtp, resendOtp, signin } = require('../controllers/authController');

const router = express.Router();

// Define routes and link them to controller functions
router.post('/signup', signup);
router.post('/verify-otp', verifyOtp);
router.post('/resend-otp', resendOtp);
router.post('/signin', signin);

module.exports = router;
