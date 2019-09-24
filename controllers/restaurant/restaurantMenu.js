const ControllerError = require('../../errors/ControllerError');
const {restaurantService} = require('../../services');

//Дістаємо з бази список меню

module.exports = async (req, res, next) => {
    try {
        const restaurant_id = req.params.id;

        const menu = await restaurantService.restaurantMenu(restaurant_id);

        res.json({
            success: true,
            msg:menu
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'restaurantMenu'))
    }

};