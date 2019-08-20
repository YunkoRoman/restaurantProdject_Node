const router = require('express').Router();

const restaurant = require('../controllers/restaurant/restaurantList');
const pizza = require('../controllers/restaurant/pizzas');


//Роутери для ресторанів
router.get('/', restaurant);
router.get('/menu/pizza/:id', pizza);




module.exports = router;