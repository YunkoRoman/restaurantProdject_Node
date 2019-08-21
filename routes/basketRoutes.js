const router = require('express').Router();
const readProduct = require('../controllers/basket/readproduct');
const deleteProduct = require('../controllers/basket/deleteProduct');
const addProduct = require('../controllers/basket/addProduct');

//Роутери для корзини
router.get('/basket', readProduct);
router.delete('/basket', deleteProduct);
router.post('/basket', addProduct);

module.exports = router;