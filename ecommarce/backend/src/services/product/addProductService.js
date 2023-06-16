const Path = require("path");

const addProductService = async (req, dataModel) => {
  const product = req.body;

  let imageUrl = [];
  if (req.files.length > 0) {
    req.files.forEach((file) => {
      const { filename } = file;
      imageUrl.push(`https://ecommarce-backend-production.up.railway.app/api/v1/getimage/` + filename);
    });
    product.imageUrl = imageUrl;
    const newProduct = new dataModel(product);
    try {
      const result = await newProduct.save();
      return { status: "Success", data: result };
    } catch (error) {
      return { status: "Error", error: error.toString() };
    }
  } else {
    return { status: "Error", message: "Please upload at least one image" };
  }
};

module.exports = addProductService;
