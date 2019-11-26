const router = require('express').Router();

const {restaurantList, restaurantMenu, restaurantProduct, restaurantInfo} =  require('../controllers/restaurant');


//Роутери для ресторанів
router.get('/', restaurantList);
router.get('/menu/:id', restaurantMenu);
router.get('/info/:id', restaurantInfo);
//TODO in future separate product router from restaurant router
router.get('/product/:id', restaurantProduct);





module.exports = router;