const router = require('express').Router();

const {orderList} =  require('../controllers/order');


router.post('/', orderList);






module.exports = router;