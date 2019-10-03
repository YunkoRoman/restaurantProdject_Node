const ControllerError = require('../../errors/ControllerError');
const {restaurantService} = require('../../services');

//Дістаємо з бази продукцію відповідно до меню

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;

        const products = await restaurantService.restaurantProduct(id);

        res.json({
            success: true,
            msg:products
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'restaurantProduct'))
    }

};