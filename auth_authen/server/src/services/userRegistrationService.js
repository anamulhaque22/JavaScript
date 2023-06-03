const bcrypt = require("bcrypt");

const userRegistrationService = async (req, dataModel) => {
  let userData = req.body;

  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = {
      ...userData,
      email: userData.email.toLowerCase(),
      password: hashedPassword,
    };
    let newUser = new dataModel(user);
    const result = await newUser.save();
    return {
      status: "Success",
      message: "User created successfully",
      data: result,
    };
  } catch (e) {
    return { status: "Error", message: e.message };
  }
};

module.exports = userRegistrationService;
