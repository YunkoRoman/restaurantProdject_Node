const ControllerError = require('../../errors/ControllerError');
const {userService} = require('../../services');
const tokenVerif = require('../../helpers/tokenVerifikator')
module.exports = async (req, res, next) => {

    try {

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');
        const {id:user_id} = tokenVerif.auth(token);

        const statistics = await userService.UserStatistics(user_id);

        res.json({
            success: true,
            msg:statistics
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'controllers/user/ordersStatistics'))

    }
};