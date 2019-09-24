const ControllerError = require('../../errors/ControllerError');
const {restaurantService} = require('../../services');

//Дістаємо з бази продукцію відповідно до меню

module.exports = async (req, res, next) => {
    try {
        const menu_id = req.params.id;

        const products = await restaurantService.restaurantProduct(menu_id);

        res.json({
            success: true,
            msg:products
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'restaurantProduct'))
    }

};