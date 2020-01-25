// Saving order with products which user chose

const ControllerError = require('../../errors/ControllerError');
const {orderService} = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const order = req.body;


        const result = await orderService.saveOrder(order);
        console.log(result);
        res.json({
            success: true,
            msg:result
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'controllers/saveOrders'))
    }

};