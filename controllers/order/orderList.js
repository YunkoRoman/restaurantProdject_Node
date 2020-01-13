const ControllerError = require('../../errors/ControllerError');
const {orderService} = require('../../services');

//Get all products for card list

module.exports = async (req, res, next) => {
    try {
        const arrProductId = req.body[0];
        const restaurant_id = +req.body[1];


        const products = await orderService.orderList(arrProductId, restaurant_id);

        res.json({
            success: true,
            msg:products
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'orderList'))
    }

};