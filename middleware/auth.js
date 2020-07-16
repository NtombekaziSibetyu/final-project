const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {

    //get token from the header
    const token = req.header('x-auth-token');

    //check if it does no exist

    if(!token){
        return res.status(401).json({ msg: 'Authorization denied'})
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.patient = decoded.patient;
        next();

    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid'});
    }
}