const ControllerError = require('../../errors/ControllerError');
const {restaurantService} = require('../../services');

//Giving restaurants list

module.exports =  async (req, res, next) => {
    try {

        const AllRestaurant = await     restaurantService.restaurantList();
        res.json({
            success: true,
            msg: AllRestaurant
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'controllers/restaurant/restaurantList'))
    }

};