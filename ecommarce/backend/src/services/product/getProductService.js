const getProductService = async (req, dataModel) => {
  try {
    const result = await dataModel.find();
    return { status: "Success", data: result };
  } catch (error) {
    return { status: "Error", error: error.toString() };
  }
};

const getProductByIdService = async (req, dataModel) => {
  try {
    const result = await dataModel.findById(req.params.id);
    return { status: "Success", data: result };
  } catch (error) {
    return { status: "Error", error: error.toString() };
  }
};

module.exports = { getProductService, getProductByIdService };
