// Saving order with products which user chose

const ControllerError = require('../../errors/ControllerError');
const tokenVerif = require('../../helpers/tokenVerifikator')
const {orderService} = require('../../services');


module.exports = async (req, res, next) => {
    try {
        const order = req.body;
        const token = req.get('Authorization');
        if (!token) throw new Error('No token');
        const {id:user_id} = tokenVerif.auth(token);

        const result = await orderService.saveOrder(order, user_id);
        res.json({
            success: true,
            msg:result
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'controllers/saveOrders'))
    }

};