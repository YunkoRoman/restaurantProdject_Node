const dataBase = require('../../dataBase').getInstance();
const ControllerError = require('../../errors/ControllerError');
module.exports = async (req, res, next) => {
    try {
        const RestaurantsModel = dataBase.getModel('restaurants');
        const AllRestaurant = await RestaurantsModel.findAll();

        res.json({
            success: true,
            msg: AllRestaurant
        });
    } catch (e) {
        next( new ControllerError(e.message, e.status, 'authUser'))
    }

};