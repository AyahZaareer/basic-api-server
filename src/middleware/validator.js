'use strict';
module.exports = (req, res, next) => {
    if (!req.body.name) {
        next('invalid req');
    }
    else {
        next();
    }
}