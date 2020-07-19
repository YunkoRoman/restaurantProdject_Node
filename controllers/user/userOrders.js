const ControllerError = require('../../errors/ControllerError');
const {userService} = require('../../services');
const tokenVerif = require('../../helpers/tokenVerifikator')


//The controller where generate user's order history
module.exports = async (req, res, next) => {

    try {

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');
        const {id:user_id} = tokenVerif.auth(token);

        const orders = await userService.userOrders(user_id);

        res.json({
            success: true,
            msg:orders
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'controllers/user/userOrders'))

    }
};