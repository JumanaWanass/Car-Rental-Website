function authenticate(req, res, next) {
    res.status(code).send(json) // next means don't continue something wrong
    next(); // next means all good
}

module.exports = authenticate;