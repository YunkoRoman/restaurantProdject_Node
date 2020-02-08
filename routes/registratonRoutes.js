const router = require('express').Router();


const {registrationUser,confirmationRegistration} = require('../controllers/registration')


router.post('/', registrationUser);
router.post('/checked', confirmationRegistration);


module.exports = router;