const ControllerError = require('../../errors/ControllerError');
const {basketService} = require('../../services/index');

//Віднімення клькості продуктів в корзині

module.exports = async (req, res, next) => {
    try {
        const {id, quantity, price} = req.body;
        if (quantity > 1) {
            const Subtraction = await basketService.subtractionQuantity(id, quantity, price);
            res.json({
                success: true,
                msg: Subtraction
            })
        }

    } catch (e) {
        next(new ControllerError(e.message, e.status, 'basket/subtractionQuantity'))
    }

};
