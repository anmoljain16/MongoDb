const jwt = require('jsonwebtoken');



module.exports = async (req, res, next) => {
try {
    const token =
        req.headers.authorization;


    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    const bearer = token.split(' ');
    const bearerToken = bearer[1];
    const decoded = jwt.verify(bearerToken, "ANMOL");
    const user = decoded;
    req.user = user;
    next();

}catch(error) {
    res.status(401).json({
        error : new Error("Invalid requrest")
    })
}}

