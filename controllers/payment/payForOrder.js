const ControllerError = require('../../errors/ControllerError');
const {tokenVerifikator} = require('../../helpers');
const {authService, purchase} = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id, name, surname} = tokenVerifikator.auth(token);
        const UserIsRegistr = await authService.userIsRegister(id, name, surname);

        if (!UserIsRegistr) throw new Error('You are not register');
        const {id: tokenId} = req.body;

        await purchase.payment(tokenId);


        res.json({
            success: true,
            msg: 'Successfully purchased items'
        })
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'PayForOrder'))
    }

}

