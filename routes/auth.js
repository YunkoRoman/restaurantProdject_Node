const router = require('express').Router();
const passport = require("passport");

const {authUser, checkUser} = require('../controllers/auth');
const {authPassportFacebook} = require('../controllers/authPassport');


router.post('/', authUser);
router.get('/check', checkUser);
router.get("/facebook", passport.authenticate("facebook", { scope: [ 'email' ] }));

router.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
        successRedirect: "/",
        failureRedirect: "/auth/fail"
    })
);
router.get("/fail", (req, res) => {
    res.send("Failed attempt");
});

router.get("/success", (req, res) => {
    res.send("Success");
});

module.exports = router;