const UserModel = require("../models/userModel");
const userLoginService = require("../services/user/userLoginService");
const userRegistrationService = require("../services/user/userRegistrationService");

const registration = async (req, res) => {
  const result = await userRegistrationService(req, UserModel);
  console.log("result", result);
  if (result.status === "Success") {
    res.status(201).json(result);
  } else {
    res.status(400).json(result);
  }
};

const login = async (req, res) => {
  const result = await userLoginService(req, UserModel);

  if (result.status === "Success") {
    res.status(200).json(result);
  } else {
    res.status(401).json(result);
  }
};

module.exports = {
  registration,
  login,
};
