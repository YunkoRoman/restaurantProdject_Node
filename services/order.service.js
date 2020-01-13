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

    saveOrder(Order){
        const OrdersModel = dataBase.getModel('orders');
        try {
            const date = Date.now();
            console.log(date);
            const{orders, restaurant_id} = Order;
            const Orders = JSON.stringify(orders);
          return OrdersModel.create({
                orders: Orders,
                date,
                restaurant_id
            });

        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'orderService')
        }
    }


}


module.exports = new restaurantService();