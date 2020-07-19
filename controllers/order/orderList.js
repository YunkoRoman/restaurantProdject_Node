const ControllerError = require('../../errors/ControllerError');
const {orderService} = require('../../services');

//Give all products for user basket
//Controller get array of products id and restaurant id

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