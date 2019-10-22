const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');


class basketService {
   async uploadProduct(product_id) {
        const productModel = dataBase.getModel('products');
        try {
            const products =  product_id.map( async id => {
              const a = await  productModel.findOne({
                    where:{
                        id
                    }
                });
                return a.dataValues
            });
           return await Promise.all(products)
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

    addProduct( user_id, product, restaurant_id) {
        const basketModel = dataBase.getModel('basket');

        // const Price = Number(price);
        try {
            return basketModel.create({
                user_id,
                product:JSON.stringify(product),
                restaurant_id
            })
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/addProduct')
        }
    }

    CheckProduct( user_id) {
        const basketModel = dataBase.getModel('basket');
        try {
            return basketModel.findOne({
                where: {
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