const addOrderService = async (req, OrderModel) => {
  const { user, products, totalPrice, shippingAddress } = req.body;
  const newOrder = new OrderModel({
    user,
    products,
    totalPrice,
    shippingAddress,
  });
  try {
    const result = await newOrder.save();
    return { status: "Success", data: result };
  } catch (error) {
    return { status: "Error", error: error.toString() };
  }
};

module.exports = addOrderService;
