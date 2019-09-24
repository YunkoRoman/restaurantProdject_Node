const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');

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
        const OrderModel = dataBase.getModel('order');

        try {
            return massif.forEach(e => {

                OrderModel.create({
                    product_id: e.dataValues.product_id,
                    restaurant_id: e.dataValues.restaurant_id,
                    user_id: e.dataValues.user_id,
                    quantity: e.dataValues.quantity,
                })
            })

        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'orderService/saveOrder')
        }
    }
}

module.exports = new orderService();