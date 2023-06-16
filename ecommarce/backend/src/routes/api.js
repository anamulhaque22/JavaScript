const express = require("express");
const { registration, login } = require("../controllers/userController");
const {
  addProduct,
  getProductImage,
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
} = require("../controllers/productController");

const {
  loginValidator,
  loginValidatorHalper,
  registerValidator,
  registerValidatorHalper,
} = require("../middlewares/user/userValidator");
const {
  addProductValidator,
  addProductValidatorHalper,
} = require("../middlewares/product/productValidator");
const attachmentProductUpload = require("../middlewares/product/attachmentProductUpload");
const { addOrder, getOrders } = require("../controllers/orderController");
const authVerifyMiddleware = require("../middlewares/authVerifyMiddleware");
const router = express.Router();

// User Profile Routes
router.post(
  "/registration",
  registerValidator,
  registerValidatorHalper,
  registration
);
router.post("/login", loginValidator, loginValidatorHalper, login);

// Product routes
router.post(
  "/addproduct",
  authVerifyMiddleware,
  attachmentProductUpload,
  addProductValidator,
  addProductValidatorHalper,
  addProduct
);
router.get("/getproducts", authVerifyMiddleware, getProducts);
router.get("/getproduct/:id", authVerifyMiddleware, getProductById);
router.get("/getimage/:filename", getProductImage);
router.get("/deleteproduct/:id", authVerifyMiddleware, deleteProductById);
router.post("/updateproduct/:id", authVerifyMiddleware, updateProductById);

// ORDER ROUTES
router.post("/addorder", authVerifyMiddleware, addOrder);
router.get("/getorders", authVerifyMiddleware, getOrders);

module.exports = router;
