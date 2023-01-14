const jwt = require('jsonwebtoken');

exports.authVerify = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { userName, userId } = decoded;
        req.userName = userName;
        req.userId = userId;
        next();
    } catch (error) {
        next('Authentication failure!');
    }
}