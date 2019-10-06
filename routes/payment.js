const router = require('express').Router();

const {payForOrder} = require('../controllers/payment');

router.post('/',  payForOrder);

module.exports = router;