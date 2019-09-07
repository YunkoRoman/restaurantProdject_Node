const router = require('express').Router();
const readProduct = require('../controllers/basket/readproduct');
const deleteProduct = require('../controllers/basket/deleteProduct');
const addProduct = require('../controllers/basket/addProduct');
const addQuantity = require('../controllers/basket/addQuantity');
const subtractionQuantity = require('../controllers/basket/subtractionQuantity');
const addQuantityWhenTouchInput = require('../controllers/basket/addQuantityWhenTouchInput');

//Роутери для корзини
router.get('', readProduct);
router.delete('', deleteProduct);
router.post('', addProduct);
router.put('', addQuantityWhenTouchInput);
router.put('/addition', addQuantity);
router.put('/subtraction', subtractionQuantity);

module.exports = router;