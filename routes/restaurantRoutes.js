const router = require('express').Router();

const restaurant = require('../controllers/restaurant/restaurantList');
const restaurantMenu = require('../controllers/restaurant/restaurantMenu');
const restaurantProduct =  require('../controllers/restaurant/restaurantProduct');


//Роутери для ресторанів
router.get('/', restaurant);
router.get('/:id', restaurantMenu);
router.get('/product/:id', restaurantProduct)





module.exports = router;