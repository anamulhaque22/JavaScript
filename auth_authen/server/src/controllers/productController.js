const Product = require("../models/productModel")
const addProductService = require("../services/product/addProductService")

const addProduct = async(req, res) => {
    const result = await addProductService(req, Product);
    if(result.status === "Success"){
        res.status(200).json(result);   
    }else{
        res.status(500).json(result);
    }
}

module.exports = {
    addProduct,
}