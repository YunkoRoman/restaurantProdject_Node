const ControllerError = require('../../errors/ControllerError');
const {userService} = require('../../services');
const tokenVerif = require('../../helpers/tokenVerifikator')
module.exports = async (req, res, next) => {

    try {

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');
        const {id:user_id} = tokenVerif.auth(token);
        console.log(user_id);

        const orders = await userService.userOrders(user_id);
        console.log(orders);

        res.json({
            success: true,
            msg:orders
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'controllers/user/userOrders'))

    }
};