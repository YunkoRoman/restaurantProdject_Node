const router = require('express').Router();

const regisrtrationUser = require('../controllers/registration/registration');
const AuthUser = require('../controllers/auth/authUser');



router.post('/registration', regisrtrationUser);
router.post ('/auth',AuthUser);



module.exports = router;