const dataBase = require('../../dataBase').getInstance();
const sendEmail = require('../../helpers/SendEmailforRegistration');
const ControllerError = require('../../errors/ControllerError');

//Реєстрація користувача

module.exports = async (req, res) => {
  try {
      const UserModel = dataBase.getModel('users');

      const {name, surname, email, password} = req.body;
      if (!name || !surname || !email || !password) throw new Error('Some field is empty');
      if (password.length < 8) throw new Error('password is shorter than eight characters');
      const findEmail = await UserModel.findOne({
          where: {
              email
          }
      });
      if (findEmail == null) {
          const createNewUser = await UserModel.create({
          name,
          surname,
          email,
          password,
          checked: false
      });
          const info = await sendEmail(createNewUser.id, email);

          res.json({
              success: true,
              msg: createNewUser,
              msg2: info
          })
      } else {
          if (email === findEmail.email) throw new Error('Такий Email вже існує');
      }



  } catch (e) {
      next( new ControllerError(e.message, e.status, 'authUser'))
  }
};