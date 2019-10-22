const {tokenVerifikator} = require('../../helpers');
const ControllerError = require('../../errors/ControllerError');
const {authService, basketService} = require('../../services/index');

//Додавання продукту в корзину

module.exports = async (req, res, next) => {
    try {

        // TODO middleware
        // const token = req.get('Authorization');
        // if (!token) throw new Error('No token');
        //
        // const {id, name, surname} = tokenVerifikator.auth(token);
        // const UserIsRegistr = await authService.userIsRegister(id, name, surname);
        // if (!UserIsRegistr) throw new Error('You are not register');

        const {user_id,product, restaurant_id} = req.body;
        console.log(product);
        console.log('**************************************')
        // checks whether such product is in the basket
        const checkProduct = await basketService.CheckProduct(user_id);

        if (checkProduct) {
            const {product:products} = checkProduct;
            const productPase = JSON.parse(products)
            console.log(productPase)



            // const updateOrder = await basketService.addQuantity(id, quantity, price);

            res.json({
                success: true,
                // msg: product
            })
        } else {

            // if (!product_id) throw new Error('No Product Id');
            const addProduct = await basketService.addProduct(user_id,product, restaurant_id);
            res.json({
                success: true,
                msg: addProduct
            })
        }
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'basket/addProduct'))
    }

};