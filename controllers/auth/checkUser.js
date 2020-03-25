
const tokenVerif = require('../../helpers/tokenVerifikator');
const ControllerError = require('../../errors/ControllerError');



module.exports = async (req, res, next) => {
    try {
        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const user = tokenVerif.auth(token);
        if (user) {
            res.json(
                true
            )
        }


    } catch (e) {
        next(new ControllerError(e.message, e.status, 'authUser'))
    }
}