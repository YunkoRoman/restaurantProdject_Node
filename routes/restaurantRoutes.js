const router = require('express').Router();

const restaurant = require('../controllers/restaurant/restaurantList');

//Роутери для ресторанів
router.get('/', restaurant);



module.exports = router;