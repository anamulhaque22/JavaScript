const Product = require("../models/productModel");
const addProductService = require("../services/product/addProductService");
const path = require("path");
const fs = require("fs");
const getProductImageService = require("../services/product/getProductImageService");
const {
  getProductService,
  getProductByIdService,
} = require("../services/product/getProductService");
const deleteProductByIdService = require("../services/product/deleteProductByIdService");
const updateProductService = require("../services/product/updateProductService");

//add product
const addProduct = async (req, res) => {
  const result = await addProductService(req, Product);
  if (result.status === "Success") {
    res.status(200).json(result);
  } else {
    // unlink product image file
    if (req.files.length > 0) {
      req.files.forEach((file) => {
        const { filename, path: imgDir } = file;
        const fullfilepath = path.join(imgDir, filename);
        fs.unlink(fullfilepath, (err) => {
          if (err) {
            console.log(err);
          }
        });
      });
    }
    res.status(500).json(result);
  }
};

// get products
const getProducts = async (req, res) => {
  const result = await getProductService(req, Product);
  if (result.status === "Success") {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

// get product by id
const getProductById = async (req, res) => {
  const result = await getProductByIdService(req, Product);
  if (result.status === "Success") {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

// get product image
const getProductImage = (req, res) => {
  const result = getProductImageService(req);

  console.log("result", result);

  if (result.status === "Success") {
    res.sendFile(result.data);
  } else {
    res.status(500).json({ status: result.status, error: result.error });
  }
};

//update product by id
const updateProductById = async (req, res) => {
  const result = await updateProductService(req, Product);
  if (result.status === "Success") {
    res.status(200).json(result);
  } else if (result.status === "404") {
    res.status(404).json(result);
  } else {
    res.status(500).json(result);
  }
};

//delete product by id
const deleteProductById = async (req, res) => {
  const result = await deleteProductByIdService(req, Product);
  if (result.status === "Success") {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

module.exports = {
  addProduct,
  getProductImage,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
