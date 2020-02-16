const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');


class UserService {
    userOrders(user_id){
        const OrderModel = dataBase.getModel('orders');
        const OrderLineModel = dataBase.getModel('orderLine');
        const OrderStatusModel = dataBase.getModel('order_status');
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
                }],
                where:{
                    user_id
                }
            });
            return orders
        }catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'UserService/UserOrder')
        }
    }
}

module.exports = new UserService();