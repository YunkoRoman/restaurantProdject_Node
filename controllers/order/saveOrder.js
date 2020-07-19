const ControllerError = require('../../errors/ControllerError');
const tokenVerif = require('../../helpers/tokenVerifikator')
const {orderService} = require('../../services');

// The controller save order to DB

module.exports = async (req, res, next) => {
    try {

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');
        const {id:user_id} = tokenVerif.auth(token);
        const order = req.body;


        const result = await orderService.saveOrder(order, user_id);
        res.json({
            success: true,
            msg:result
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'controllers/saveOrders'))
    }

};