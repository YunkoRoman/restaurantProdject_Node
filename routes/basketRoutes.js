const router = require('express').Router();
const readProduct = require('../controllers/basket/readproduct');
const deleteProduct = require('../controllers/basket/deleteProduct');

//Роутери для корзини
router.get('/basket', readProduct);
router.delete('/basket', deleteProduct);

module.exports = router;