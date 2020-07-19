const passport = require("passport");

const strategy = require("passport-facebook");

const {clientID, callbackURL, clientSecret} = require('../../constants/secret');

const facebookStrategy = strategy.Strategy;


passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((obj, done) => {
    done(null, obj)
});

passport.use(
    new facebookStrategy({

            clientID: clientID,
            clientSecret: clientSecret,
            callbackURL: callbackURL,
            profileFields: ["email", "name"]
        },
        function (accessToken, refreshToken, profile, done) {
            const {email, first_name, last_name} = profile._json;
            const userData = {
                email,
                firstName: first_name,
                lastName: last_name
            };
            console.log(userData);
        }
    )
);


