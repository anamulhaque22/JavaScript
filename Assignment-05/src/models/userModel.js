const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    emailAddress: { type: String, unique: true, require: true },
    mobileNumber: { type: String, unique: true, require: true },
    city: { type: String },
    userName: { type: String, unique: true, require: true },
    password: { type: String, require: true },
});
const profileModel = mongoose.model('Profile', userSchema);

module.exports = profileModel;