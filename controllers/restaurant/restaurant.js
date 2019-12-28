const ControllerError = require('../../errors/ControllerError');
const {restaurantService} = require('../../services');
const restaurantModel = require('../../dataBase/models/restaurant');



//Get restaurants info

module.exports = async (req, res, next) => {
    try {


        const {id} = req.params;
        const RestaurantName = await restaurantService.restaurantInfo(id);

        res.json({
            success: true,
            msg: RestaurantName

        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'controllers/restaurant/restaurantInfo'))
    }

};