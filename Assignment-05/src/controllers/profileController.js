const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const profileModel = require('../models/userModel');

//sign up
exports.createProfile = async (req, res) => {
    try {
        const { firstName,
            lastName,
            emailAddress,
            mobileNumber,
            city,
            userName,
            password } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new profileModel({
            firstName,
            lastName,
            emailAddress,
            mobileNumber,
            city,
            userName,
            password: hashPassword
        });
        const data = await newUser.save();
        res.status(200).json({ message: 'Signup was successful!', data: data });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

// login 
exports.logIn = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await profileModel.findOne({ userName });
        if (user) {
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (isValidPassword) {
                const payload = {
                    userName: user.userName,
                    userId: user._id,
                };

                //token generate
                const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

                res.status(200).json({ "access_token": token, "message": "Login successful!" });
            } else {
                res.status(401).json({ "error": "Authetication failed!" });
            }
        }
        else {
            res.status(401).json({ "error": "Authetication failed!" });
        }

    } catch (error) {
        res.status(401).json({
            "error": "Authetication failed!"
        });
    }
}

//get profile
exports.selectProfile = (req, res) => {
    const userName = req.userName;
    console.log()
    profileModel.findOne({ userName }, (err, data) => {
        if (!err) {
            res.status(200).json({ message: "Success.", data: data });
        } else {
            res.status(400).json({ message: "Failed!", data: err });
        }
    })
}

// update profile
exports.updateProfile = async (req, res) => {
    const userName = req.userName;
    const updateData = req.body;

    if (updateData.password) {
        updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    profileModel.updateOne({ userName }, { $set: updateData }, { upsert: true }, (err, data) => {
        if (!err) {
            res.status(200).json({ message: "Update success.", data: data });
        } else {
            res.status(400).json({ message: "Failed!", data: err });
        }
    })
}