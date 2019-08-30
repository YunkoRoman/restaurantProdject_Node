const tokenVerifikator = require('../../helpers/tokenVerifikator');
const ControllerError = require('../../errors/ControllerError');
const {authService, basketService} = require('../../services/index');

module.exports = async (req, res, next) => {
    try {

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id, name, surname} = tokenVerifikator.auth(token);
        const UserIsRegistr = await authService.userIsRegister(id, name, surname);
        if (!UserIsRegistr) throw new Error('You are not register');

        const {product_id} = req.body;
        if (!product_id) throw new Error('No Product Id');
        const addProduct = await basketService.addProduct(product_id, id);

        res.json({
            success: true,
            msg: addProduct
        })
    } catch (e) {
        next( new ControllerError(e.message, e.status, 'basket/addProduct'))
    }

};