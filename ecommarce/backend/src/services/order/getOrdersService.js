const getOrdersService = async (req, Order) => {
  const { user } = req.headers;
  console.log(user);
  try {
    const result = await Order.find({ user: user._id }).populate(
      "products.product"
    );
    return { status: "Success", data: result };
  } catch (error) {
    return { status: "Error", error: error.toString() };
  }
};

module.exports = getOrdersService;
