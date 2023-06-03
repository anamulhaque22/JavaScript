const addProductService = async(req, dataModel) => {
    const product = req.body;
    const newProduct = new dataModel(product);
    try {
        const result = await newProduct.save();
        return {status: "Success", data: result};
    } catch (error) {
        return {status: "Error", error: error.toString()};
    }
}

module.exports = addProductService;