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

    async saveOrder(Order, user_id) {
        const OrdersModel = dataBase.getModel('orders');
        const OrderLineModel = dataBase.getModel('orderLine');
        const OrderStatusModel = dataBase.getModel('order_status');
        const UsersProducts = dataBase.getModel('users_products')
        try {
            const date = Date.now();
            const {orders, restaurant_id, totalPrice: total_price, table_numb, pay_method: payment_method} = Order;

            const restaurantDefaultOrderStatus = await OrderStatusModel.findOne({
                where: {
                    restaurant_id,
                    default: true
                }
            });
            const {status_id} = restaurantDefaultOrderStatus;

            const resultSave = await OrdersModel.create({
                date,
                restaurant_id,
                status_id,
                total_price,
                user_id,
                table_numb,
                payment_method
            });
            if (resultSave.id) {
                const order_id = resultSave.id;
                const orderList = orders.map(e => {
                    console.log(e);
                    return OrderLineModel.create({
                        order_id,
                        product_id: e.id,
                        price: e.price,
                        qtt: e.qtt,
                        user_id,
                        restaurant_id,
                        date,
                        menu_id: e.menu_id
                    });
                });

                return Promise.all(orderList).then((element) => {
                    if (element) {
                        return true
                    }
                    else {
                        return false
                    }
                });


            }
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'orderService/saveOrder')
        }
    }


}


module.exports = new restaurantService();