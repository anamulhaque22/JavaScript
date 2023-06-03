const express = require('express');
const { registration, login } = require('../controllers/userController');
const { addProduct } = require('../controllers/productController');
const authVerifyMiddleware = require('../middlewares/authVerifyMiddleware');
const router = express.Router();


// User Profile Routes 
router.post("/registration",registration);
router.post("/login", login);

// Product routes
// router.use('/addproduct', express.json({ limit: '10mb' }));
router.post('/addproduct', authVerifyMiddleware ,addProduct);


module.exports = router;