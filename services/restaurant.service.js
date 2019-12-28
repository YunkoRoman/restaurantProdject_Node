const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');


class restaurantService {
    restaurantInfo(id) {
        const restModel = dataBase.getModel('restaurant');


        try {
            return restModel.findAll(
                {

                    where: {
                        id
                    }
                }
            )


        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'restaurantService')
        }
    }

    restaurantProduct(menu_id) {
        const prodModel = dataBase.getModel('products');

        try {

            return prodModel.findAll(
                {
                    where: {
                        menu_id
                    }
                }
            )


        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'restaurantService')
        }
    }

    restaurantList() {
        const restModel = dataBase.getModel('restaurants');
        try {
            return restModel.findAll()

        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'restaurantService')
        }

    }

    restaurantMenu(restaurant_id) {
        const menusModel = dataBase.getModel('menus');
        try {
            return menusModel.findAll({
                where:{
                    restaurant_id
                }
            })

        } catch
            (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'restaurantService')
        }

    }


}


module.exports = new restaurantService();