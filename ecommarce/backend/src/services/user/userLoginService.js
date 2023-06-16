const bcrypt = require("bcrypt");
const createToken = require("../../utility/createToken");

const userLoginService = async (req, dataModel) => {
  try {
    const user = await dataModel.findOne({ email: req.body.email });
    console.log(user);
    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        const userObj = {
          _id: user._id,
          name: user.name,
          email: user.email,
        };
        const token = await createToken(userObj);
        return { status: "Success", data: { token: token, user } };
      } else {
        return { status: "Error", message: "Invalid password" };
      }
    } else {
      return { status: "Error", message: "User not found" };
    }
  } catch (error) {
    return { status: "Error", error: error.toString() };
  }
};

module.exports = userLoginService;
