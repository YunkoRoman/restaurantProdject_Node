
const ControllerError = require('../../errors/ControllerError');
const {restaurantService} = require('../../services');




//Дістаємо з бази список меню

module.exports = async (req, res, next) => {
    try {
        const {id:restaurant_id} = req.params;
        const menus = await restaurantService.restaurantMenu(restaurant_id);
        res.json({
            success: true,
            msg: menus
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'restaurantMenu'))
    }

};