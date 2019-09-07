const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');

class restaurantService {

    restaurantList() {
        const RestaurantsModel = dataBase.getModel('restaurants');
        try {
            return RestaurantsModel.findAll()

        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'restaurantService/restaurantList')
        }
    }

    restaurantMenu(restaurant_id) {
        const menus = dataBase.getModel('menus');
        const restaurant = dataBase.getModel('restaurants')
        try {
            return menus.findAll({
                include: {
                    model: restaurant
                },
                where: {
                    restaurant_id
                }
            })
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'restaurantService/restaurantMenu')
        }
    }

    restaurantProduct(menu_id) {
        const product_to_menu = dataBase.getModel('product_to_menu');
        const products = dataBase.getModel('products');

        try {
            return product_to_menu.findAll({
                include: [{
                    model: products
                }],
                where: {
                    menu_id
                }
            })
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'restaurantService/restaurantMenu')
        }
    }

}


module.exports = new restaurantService();