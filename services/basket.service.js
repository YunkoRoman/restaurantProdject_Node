const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');

class basketService {
    uploadProduct(id) {
        const basketModel = dataBase.getModel('basket');
        try {

            return basketModel.findAll({
                where:{
                    user_id:id
                }
            })
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService')
        }
    }


}


module.exports = new basketService();