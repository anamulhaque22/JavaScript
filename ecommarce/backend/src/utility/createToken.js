const jwt = require("jsonwebtoken");

const createToken = async (data) => {
  const token = await jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRATION,
  });
  return token;
};
module.exports = createToken;
