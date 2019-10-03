const router = require('express').Router();


const {registrationUser,confirmationRegistration} = require('../controllers/registration')

//Роутери для реєстрацї
router.post('/registration', registrationUser);
router.post('/checked', confirmationRegistration);


module.exports = router;