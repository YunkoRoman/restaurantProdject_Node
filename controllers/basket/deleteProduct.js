const tokenVerifikator = require('../../helpers/tokenVerifikator');
const ControllerError = require('../../errors/ControllerError');
const {authService, baasketService} = require('../../services/index');

module.exports = async (req, res, next) => {
    try {

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id, name, surname} = tokenVerifikator.auth(token);
        const UserIsRegistr = await authService.userIsRegister(id, name, surname);
        if (!UserIsRegistr) throw new Error('You are not register');

        const deleteProduct = await baasketService.deleteProduct(id);

        res.json({
            success: true,
            msg: deleteProduct
        })
    } catch (e) {
        next( new ControllerError(e.message, e.status, 'basket'))
    }

};