function authenticate(req, res, next) {
    if (req.session.auth == false)
    {
        res.status(401);
    }
    else
    {
        next();
    }
}

module.exports = authenticate;