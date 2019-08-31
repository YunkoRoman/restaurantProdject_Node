const router = require('express').Router();
const readProduct = require('../controllers/basket/readproduct');
const deleteProduct = require('../controllers/basket/deleteProduct');
const addProduct = require('../controllers/basket/addProduct');
const addQuantity = require('../controllers/basket/addQuantity');

//Роутери для корзини
router.get('', readProduct);
router.delete('/:id', deleteProduct);
router.post('', addProduct);
router.put('/addition', addQuantity);

module.exports = router;