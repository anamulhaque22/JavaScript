const Order = require("../models/orderModel");
const getOrdersService = require("../services/order/getOrdersService");
const addOrderService = require("../services/order/makeOrderService");

const addOrder = async (req, res) => {
  const result = await addOrderService(req, Order);
  if (result.status === "Success") {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const getOrders = async (req, res) => {
  const result = await getOrdersService(req, Order);
  if (result.status === "Success") {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

module.exports = { addOrder, getOrders };
