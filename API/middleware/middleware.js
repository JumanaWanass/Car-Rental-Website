function authenticate(req, res, next) {
    res.status(code).send(json) // next means don't continue something wrong
    next(); // next means all good
}

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  
module.exports = authenticate;