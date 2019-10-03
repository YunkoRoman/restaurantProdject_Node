const {tokenVerifikator} = require('../../helpers');
const ControllerError = require('../../errors/ControllerError');
const {authService, basketService} = require('../../services/index');

//Додавання продукту в корзину

module.exports = async (req, res, next) => {
    try {

        // TODO middleware
        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id, name, surname} = tokenVerifikator.auth(token);
        const UserIsRegistr = await authService.userIsRegister(id, name, surname);
        if (!UserIsRegistr) throw new Error('You are not register');

        const {product_id, price, restaurant_id} = req.body;

        //checks whether such product is in the basket
        const checkProduct = await basketService.CheckProduct(product_id, id);

        if (checkProduct) {
            const {id, quantity, total_price: price} = checkProduct;
            const updateOrder = await basketService.addQuantity(id, quantity, price);

            res.json({
                success: true,
                msg: updateOrder
            })
        } else {


            if (!product_id) throw new Error('No Product Id');
            const addProduct = await basketService.addProduct(product_id, id, price, restaurant_id);
            res.json({
                success: true,
                msg: addProduct
            })
        }
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'basket/addProduct'))
    }

};