const router = require('express').Router();
const readProduct = require('../controllers/basket/readproduct');
const deleteProduct = require('../controllers/basket/deleteProduct');
const addProduct = require('../controllers/basket/addProduct');

//Роутери для корзини
router.get('', readProduct);
router.delete('/:id', deleteProduct);
router.post('', addProduct);

module.exports = router;