function adminAuthenticate(req, res, next) {
    if (req.session.auth == false || req.session.admin == false)
    {
        res.status(401);
    }
    else
    {
        next();
    }
}

module.exports = adminAuthenticate;