const router = require('express').Router();

const restaurant = require('../controllers/restaurant/restaurantList');
const pizza = require('../controllers/restaurant/pizza_menu');


//Роутери для ресторанів
router.get('/', restaurant);
router.get('/pizza/:id', pizza);




module.exports = router;