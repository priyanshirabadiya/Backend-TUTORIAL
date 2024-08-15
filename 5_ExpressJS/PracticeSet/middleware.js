module.exports = (req, res, next) => {
    if (!req.query.age) {
        res.send("<h1>Plz provide age.</h1>");
    }
    else if (req.query.age < 18) {
        res.send("<h1>you are under aged.</h1>");
    }
    else {
        next();
    }
}