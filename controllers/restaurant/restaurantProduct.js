const ControllerError = require('../../errors/ControllerError');
const {restaurantService} = require('../../services');

//Get all products

module.exports = async (req, res, next) => {
    try {
        const {id:menu_id} = req.params;

        const products = await restaurantService.restaurantProduct(menu_id);

        res.json({
            success: true,
            msg:products
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'restaurantProduct'))
    }

};