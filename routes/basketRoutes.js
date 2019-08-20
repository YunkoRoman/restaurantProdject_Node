const router = require('express').Router();
const basket = require('../controllers/restaurant/basket');

//Роутери для корзини
router.get('/basket', basket);

module.exports = router;