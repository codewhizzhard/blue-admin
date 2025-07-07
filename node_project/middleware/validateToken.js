const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                return next(new Error("Not authorized: Invalid token"));
            }
                console.log("decodedinggggggg", decoded);
                 req.user = decoded.user; 
            /* return next();  */// ✅ only call next on success
            next()
        });
    } else {
        res.status(401);
        return next(new Error("Not authorized: No token provided"));
    }
});

module.exports = validateToken