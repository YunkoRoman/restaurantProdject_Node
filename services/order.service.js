const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');
const {tablesConst} = require('../constants/');

const OrderModel = dataBase.getModel(tablesConst.ORDERS);

class orderService {

    searchProduct(id) {
        const BasketModel = dataBase.getModel('basket');
        try {

            return BasketModel.findAll({
                where: {
                    user_id: id
                }
            })

        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'orderService/saveOrder')
        }
    }

    saveOrder(massif) {
        try {
            const insertPromiseVales = massif.map( async e => {
                const {product_id, restaurant_id, user_id, quantity} = e.dataValues;
                OrderModel.create({
                    product_id,
                    restaurant_id,
                    user_id,
                    quantity
                });
            });

            Promise.all(insertPromiseVales)
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'orderService/saveOrder')
        }
    }

    deleteProductWithBasket(massif) {

        const BasketModel = dataBase.getModel('basket');
        try {

            massif.forEach(e => {
                const {product_id, restaurant_id} = e.dataValues;

                BasketModel.destroy({
                    where: {
                        product_id,
                        restaurant_id
                    }
                })
            });

        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'orderService/deleteProductWithBasket')
        }

    }
}

module.exports = new orderService();