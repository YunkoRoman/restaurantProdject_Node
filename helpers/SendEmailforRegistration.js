const {email, password} = require('../constants/mailInfo');
const mailer = require('nodemailer');
const TokenGenerator = require('../helpers/tokinayzer');

module.exports = async (user, UserEmail) => {
    const transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: password
        }
    });

    const info = await transport.sendMail({
        from: email,
        to: UserEmail,
        subject: 'Пдтвердження реєстрації',
        html:BuildingTemplate(user)
    });
    console.log(user);
    return info.response;

};

function BuildingTemplate(user) {
    const token = TokenGenerator({user});
    const html =
        `<h1> Для підтвердження реєстрації, нажміть на кнопку </h1>
        <br>
        <a href="http://localhost:4200/user/checked?t=${token}">Підтвердити</a>
       `;

    return html
}

