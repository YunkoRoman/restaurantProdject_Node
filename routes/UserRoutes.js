const router = require('express').Router();

const {UserOrders, OrdersStat} = require('../controllers/user');

router.get('/orders', UserOrders);
router.get('/statistic', OrdersStat);


module.exports = router;