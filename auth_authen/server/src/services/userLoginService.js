const createToken = require("../utility/createToken");
const bcrypt = require('bcrypt');

const userLoginService = async (req, dataModel) => {
    try {
        const user = await dataModel.findOne({email: req.body.email});
        if(user && user._id){
            const isValidPassword = await bcrypt.compare(req.body.password, user.password);
            if(isValidPassword){
                const userObj={
                    userName:user.firstName + " " + user.lastName,
                    email:user.email,
                }
                const token = await createToken(userObj);
                return {status: 'Success', data: {token: token, user}};
            }else{
                return {status: 'Error', message: 'Invalid password'};
            }
        }else{
            return {status: 'Error', message: 'User not found'};
        }
    } catch (error) {
        return { status: "Error", error: error.toString()}
    }
}

module.exports = userLoginService;