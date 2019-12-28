const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');


class restaurantService {

    orderList(arrProductId, restaurant_id) {
        console.log(arrProductId);
        console.log(restaurant_id);
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


}


module.exports = new restaurantService();