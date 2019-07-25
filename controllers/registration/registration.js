const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
  try {
      const UserModel = dataBase.getModel('users');

      const {name, surname, email, password} = req.body;
      if (!name || !surname || !email || !password) throw new Error('Some field is empty');
      if (password.length < 8) throw new Error('password is shorter than eight characters');

      const createNewUser = await UserModel.create({
              name,
              surname,
              email,
              password
          });
      res.json({
          success: true,
          msg: createNewUser
      })

  } catch (e) {
      console.log(e);
      res.status(400).json({
          success: false,
          msg: e.message
      })
  }
};