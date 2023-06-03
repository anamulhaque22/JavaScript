const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: String, required: true},
    brand: {type: String, required: true},
    img: {type: String, required: true},
}, {timeseries: true, versionKey: false});

const Product = mongoose.model("Product", productSchema);

module.exports = Product