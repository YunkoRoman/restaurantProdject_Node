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

    restaurantProduct(id) {
        const prodModel = dataBase.getModel('products');
        const menuModel = dataBase.getModel('menus');

        try {

            return prodModel.findAll(
                {
                    include: [{
                        model: menuModel
                    }],
                    where: {
                        restaurant_id: id
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

    restaurantMenu (restaurant_id)  {

        try {
            return Connect.query('SELECT * FROM `menus`').then( rows => {
                console.log(rows);
            } )



        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'restaurantService')
        }

    }


}


module.exports = new restaurantService();