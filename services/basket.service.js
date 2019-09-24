const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');

class basketService {
    uploadProduct(id) {
        const basketModel = dataBase.getModel('basket');
        const productModel = dataBase.getModel('products');
        try {

            return basketModel.findAll({
                include: [{
                    model: productModel,
                    attributes: ["id", "name", 'menu_id', 'price']
                }],
                where: {
                    user_id: id
                }
            })
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/uploadProduct')
        }
    }

    deleteProduct(basketProductId) {
        const basketModel = dataBase.getModel('basket');
        try {

            return basketModel.destroy({
                where: {
                    id: basketProductId
                }
            })
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/deleteProduct')
        }

    }

    addProduct(product_id, user_id, price, restaurant_id) {
        console.log(restaurant_id);
        const basketModel = dataBase.getModel('basket');
        const Price = Number(price);
        try {
            return basketModel.create({
                product_id,
                user_id,
                quantity: 1,
                total_price: Price,
                restaurant_id
            })
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/addProduct')
        }
    }

    CheckProduct(product_id, user_id) {
        const basketModel = dataBase.getModel('basket');
        try {
            return basketModel.findOne({
                where: {
                    product_id,
                    user_id
                }
            })
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/CheckProduct')
        }
    }

    addQuantity(idOrderInBasket, quantity, price) {
        const basketModel = dataBase.getModel('basket');
        try {
            const Price = Number(price);
            const Quantity = ++quantity;
            const total_price = Quantity * Price;
            return basketModel.update({
                quantity: Quantity,
                total_price
            }, {
                where: {
                    id: idOrderInBasket
                }
            })
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/addQuantity')
        }

    }
    addQuantityWhenTouchInput(idOrderInBasket, quantity, price){
        const basketModel = dataBase.getModel('basket');
        try {
           if (quantity >= 1) {
               const Price = Number(price);
               const Quantity = Number(quantity);
               const total_price = Quantity * Price;
               return basketModel.update({
                   quantity: Quantity,
                   total_price
               }, {
                   where: {
                       id: idOrderInBasket
                   }
               })
           }
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/addQuantityOnTouchInput')
        }
    }

    subtractionQuantity(idOrderInBasket, quantity, price) {
        const basketModel = dataBase.getModel('basket');
        try {
            if (quantity > 1) {
                const Price = Number(price);
                const Quantity = --quantity;
                const total_price = Quantity * Price;
                return basketModel.update({
                    quantity: Quantity,
                    total_price
                }, {
                    where: {
                        id: idOrderInBasket
                    }
                })
            }
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/subtractionQuantity')
        }
    }
}


module.exports = new basketService();