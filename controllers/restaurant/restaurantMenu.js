const dataBase = require('../../dataBase').getInstance();
const ControllerError = require('../../errors/ControllerError');
module.exports = async (req, res, next) => {
    try {



        res.json({
            success: true,
            msg:
        });
    } catch (e) {
        next( new ControllerError(e.message, e.status, 'restaurantMenu'))
    }

};