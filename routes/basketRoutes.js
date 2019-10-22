const router = require('express').Router();
const {deleteProduct, addProduct, readProduct} = require('../controllers/basket');
// const {saveOrder} = require('../controllers/order');


//Роутери для корзини
router.post('', readProduct);
router.delete('/:id', deleteProduct);
// router.post('', addProduct);
// router.put('', addQuantityWhenTouchInput);
// router.put('/addition', addQuantity);
// router.put('/subtraction', subtractionQuantity);
// router.post('/order', saveOrder);
module.exports = router;