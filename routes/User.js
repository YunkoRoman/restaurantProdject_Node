const router = require('express').Router();

const {UserOrders} = require('../controllers/user');

router.get('/orders', UserOrders);

module.exports = router;