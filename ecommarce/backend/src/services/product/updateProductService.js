const updateProductService = async (req, DataModel) => {
  const productId = req.params.id;
  const { name, price, quantityInStock, description, category } = req.body;
  try {
    const updatedProduct = await DataModel.findByIdAndUpdate(productId, {
      name,
      price,
      quantityInStock,
      description,
      category,
    });
    if (!updatedProduct) {
      return { status: "404", error: "Product not found" };
    }
    return { status: "Success", data: updatedProduct };
  } catch (error) {
    return { status: "Error", error: error.toString() };
  }
};

module.exports = updateProductService;
