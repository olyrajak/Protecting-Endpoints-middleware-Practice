module.exports = {
    loggedInUser: (req, res, next) => {
        if (req.session && req.session.UserId) {
            next();
        } else {
            return res.redirect("/login")
        }
    }
}