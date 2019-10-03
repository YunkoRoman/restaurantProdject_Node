const ControllerError = require('../../errors/ControllerError');
const {tokenVerifikator} = require('../../helpers');
const {authService, orderService} = require('../../services');



module.exports = async (req, res, next) => {
    try {
        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id, name, surname} = tokenVerifikator.auth(token);
        const UserIsRegistr = await authService.userIsRegister(id, name, surname);

        if (!UserIsRegistr) throw new Error('You are not register');

        const searchProduct = await orderService.searchProduct(id);

        const saveProduct = await orderService.saveOrder(searchProduct);
        // if (saveProduct === true) {
        //     await orderService.deleteProductWithBasket(searchProduct)
        // }
        res.json({
            success: true
        })
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'order/saveOrder'))
    }
    
}