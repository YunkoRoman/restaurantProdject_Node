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
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/uploadProduct')
        }
    }

    deleteProduct(id) {
        const basketModel = dataBase.getModel('basket');
        try {

            return basketModel.destroy({
                where:{
                    id
                }
            })
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/deleteProduct')
        }

    }
    addProduct (productObj) {
        const basketModel = dataBase.getModel('basket');
        try {

            return basketModel.create(productObj)
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/addProduct')
        }
    }
}


module.exports = new basketService();