const {secret} = require('../constants');
const stripe = require('stripe')(secret.StripeSecretKey);

const ControllerError = require('../errors/ControllerError');

// service Payment  isn't end

class Purchase {

    payment (tokenId) {
        console.log(11111111111111111);
        try {
            return stripe.charges.create({
                amount: 200,
                source: tokenId,
                currency: 'usd'
            })


        }catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'userService/authUser')
        }
    }

}
module.exports = new Purchase();