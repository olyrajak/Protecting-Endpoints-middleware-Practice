var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/protected', auth.loggedInUser, function(req, res) {
    console.log(req.session);

    return res.redirect("/users")


});

module.exports = router;