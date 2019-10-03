const router = require('express').Router();

const {restaurantList, restaurantMenu, restaurantProduct} =  require('../controllers/restaurant');


//Роутери для ресторанів
router.get('/', restaurantList);
router.get('/:id', restaurantMenu);
//TODO in future separate product router from restaurant router
router.get('/product/:id', restaurantProduct)





module.exports = router;