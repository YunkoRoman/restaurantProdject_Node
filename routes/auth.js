const router = require('express').Router();
// TODO index
const {authUser} = require('../controllers/auth');

//Роутери для входу
router.post('/auth', authUser);

module.exports = router;