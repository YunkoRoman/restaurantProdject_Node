const ControllerError = require('../../errors/ControllerError');
const {basketService} = require('../../services/index');

module.exports = async (req, res, next) => {
    try {
        const {id, quantity} = req.body;
        const Add = await basketService.addQuantity(id, quantity);
        res.json({
            success: true,
            msg: Add
        })

    } catch (e) {
        next(new ControllerError(e.message, e.status, 'basket/addQuantity'))
    }

};
