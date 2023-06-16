const { check, validationResult } = require("express-validator");

const addProductValidator = [
  check("name").notEmpty().withMessage("Name is required"),
  check("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat()
    .withMessage("Price must be a valid number"),
  check("quantityInStock")
    .notEmpty()
    .withMessage("Quantity in stock is required")
    .isFloat()
    .withMessage("Quantity in stock must be an integer"),
  check("description").notEmpty().withMessage("Description is required"),
  check("category").notEmpty().withMessage("Category is required"),
];

const addProductValidatorHalper = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.status(400).json({ errors: mappedErrors });
  }
};

module.exports = {
  addProductValidator,
  addProductValidatorHalper,
};
