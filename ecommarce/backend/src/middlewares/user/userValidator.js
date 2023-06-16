const { check, validationResult } = require("express-validator");
const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");

const loginValidator = [
  check("email")
    .toLowerCase()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  check("password").notEmpty().withMessage("Password is required"),
];

const loginValidatorHalper = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).send({ status: "Error", errors: errors.array() });
  }
  next();
};

const registerValidator = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Name is required")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anything other then alphabet")
    .trim(),
  check("email")
    .toLowerCase()
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
      try {
        const result = await UserModel.findOne({ email: value });
        console.log(result);
        if (result) {
          console.log("Email already is user!");
          throw createHttpError("Email already is user!");
        }
      } catch (error) {
        throw createHttpError(error.message);
      }
    }),
  check("mobile")
    .isMobilePhone("bn-BD", { strictMode: true })
    .withMessage("Mobile number must be valid Bangladeshi number!"),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must be 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
    ),
  check("gender")
    .notEmpty()
    .withMessage("Gender is required")
    .isIn(["male", "female", "other"])
    .withMessage("Invalid gender value"),
  check("address").notEmpty().withMessage("Address is required"),
];

const registerValidatorHalper = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.status(400).json({ errors: mappedErrors });
  }
};

module.exports = {
  loginValidator,
  loginValidatorHalper,
  registerValidator,
  registerValidatorHalper,
};
