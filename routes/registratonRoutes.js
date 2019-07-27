const router = require('express').Router();

const regisrtrationUser = require('../controllers/registration/registration');
const confirmationRegistration = require('../controllers/registration/confirmationRegistration')


router.post('/registration', regisrtrationUser);
router.get('/checked', confirmationRegistration);


module.exports = router;