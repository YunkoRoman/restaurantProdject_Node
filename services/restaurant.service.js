const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');

class restaurantService {

    restaurantList(){
        const RestaurantsModel = dataBase.getModel('restaurants');
        try {
            return  RestaurantsModel.findAll()

        }catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'restaurantService/restaurantList')
        }
    }
}




module.exports = new restaurantService();