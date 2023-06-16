const jwt = require("jsonwebtoken");

function authVerifyMiddleware(req, res, next) {
  const token = req.headers["token"];
  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err) {
      res
        .status(401)
        .json({ status: "failed", message: "Authentication failure!" });
    } else {
      console.log("auth middlewareI",data);
      req.headers.user = data;
      next();
    }
  });
}

module.exports = authVerifyMiddleware;
