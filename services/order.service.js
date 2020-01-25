const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');


class restaurantService {

    orderList(arrProductId, restaurant_id) {
        const productModel = dataBase.getModel('products');

        try {

            const products = arrProductId.map(async (id) => {
                return productModel.findOne({
                    where: {
                        id,
                        restaurant_id
                    }
                });
            });
            return Promise.all(products).then((product) => {
                return product
            })


        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'restaurantService')
        }
    }

    async saveOrder(Order) {
        const OrdersModel = dataBase.getModel('orders');
        const OrderLineModel = dataBase.getModel('orderLine');
        try {
            const date = Date.now();
            const restaurant_id = Order[1];

            const result = await OrdersModel.create({
                date,
                restaurant_id
            });
            if (result.id) {
                const order_id = result.id;
                const orderList = Order[0].orders.map(e => {
                    return OrderLineModel.create({
                        order_id,
                        product_id: e.id,
                        price: e.price,
                        qtt: e.qtt
                    })
                });
                return Promise.all(orderList).then((element) => {
                    if (element) {
                        return true
                    }
                    else {
                        return false
                    }
                })
            }


        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'orderService')
        }
    }


}


module.exports = new restaurantService();