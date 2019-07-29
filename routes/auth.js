const router = require('express').Router();
const authUser = require('../controllers/auth/authUser');

//Роутери для входу
router.post('/auth', authUser);

module.exports = router;