const {tokenVerifikator} = require('../../helpers');
const ControllerError = require('../../errors/ControllerError');
const {authService, basketService} = require('../../services/index');

//Видалення продукту з корзини

module.exports = async (req, res, next) => {
    try {
// todo middlewware
        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id, name, surname} = tokenVerifikator.auth(token);
        const UserIsRegistr = await authService.userIsRegister(id, name, surname);
        if (!UserIsRegistr) throw new Error('You are not register');
        const productIdWithBasket = req.params.id;
        const deleteProduct = await basketService.deleteProduct(productIdWithBasket);

        res.json({
            success: true,
            msg: deleteProduct
        })
    } catch (e) {
        next( new ControllerError(e.message, e.status, 'basket/deleteProduct'))
    }

};