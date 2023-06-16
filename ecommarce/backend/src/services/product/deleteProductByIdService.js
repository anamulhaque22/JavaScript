const path = require("path");
const fs = require("fs");

const deleteProductByIdService = async (req, Product) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product?.imageUrl.length > 0) {
      product.imageUrl.forEach((imgUrl) => {
        console.log("imgUrl", imgUrl);
        const filename = imgUrl.replace(
          "https://ecommarce-backend-production.up.railway.app/api/v1/getimage/",
          ""
        );
        console.log("filename", filename);
        const fullfilepath = path.join(
          __dirname,
          "../../uploads/images/products/" + filename
        );
        console.log("fullfilepath", fullfilepath);

        const deleted = fs.unlinkSync(fullfilepath);
        console.log("deleted", deleted);
      });
    }

    const result = await Product.findByIdAndDelete(req.params.id);
    return { status: "Success", data: result };
  } catch (error) {
    return { status: "Error", error: error.toString() };
  }
};

module.exports = deleteProductByIdService;
