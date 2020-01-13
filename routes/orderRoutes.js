const router = require('express').Router();

const {orderList, saveOrder} =  require('../controllers/order');


router.post('/', orderList);
router.post('/save', saveOrder);






module.exports = router;