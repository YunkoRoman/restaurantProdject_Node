const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');


class UserService {


    userOrders(user_id) {
        const OrderModel = dataBase.getModel('orders');
        const OrderLineModel = dataBase.getModel('orderLine');
        const OrderStatusModel = dataBase.getModel('order_status');
        const RestaurantModel = dataBase.getModel('restaurant');
        const ProductModel = dataBase.getModel('products');

        try {

            const orders = OrderModel.findAll({
                include: [{
                    model: OrderLineModel,
                    include: [{
                        model: ProductModel
                    }]
                }, {
                    model: OrderStatusModel

                }, {
                    model: RestaurantModel
                }
                ],
                where: {
                    user_id
                }
            });
            return orders
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'UserService/UserOrder')
        }
    };

    async UserStatistics(user_id) {
        const OrderLineModel = dataBase.getModel('orderLine');
        const RestaurantModel = dataBase.getModel('restaurant');
        const ProductModel = dataBase.getModel('products');

        try {
            const statistics = await OrderLineModel.findAll({
                include: [{
                    model: ProductModel,
                }, {
                    model: RestaurantModel
                }
                ],
                where: {
                    user_id
                }
            });
            let output = [];
            statistics.forEach(function (item) {
                let existing = output.filter(function (v) {
                    return v.product_id === item.product_id;
                });
                if (existing.length) {
                    let existingIndex = output.indexOf(existing[0]);
                    output[existingIndex].qtt = output[existingIndex].qtt + item.qtt
                } else {
                    output.push(item);
                }
            });

            output.sort((a, b) => {
                return b.qtt - a.qtt
            });
            return output

        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'UserService/UserStatistics')
        }

    }


}

module.exports = new UserService();