const User = require('../model/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

exports.registerUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false })
        if (user) {
            return res.json({ message: "User already exist..." });
        }
        let hashpassword = await bcrypt.hash(req.body.password, 10);
        console.log(hashpassword);
        user = await User.create({ ...req.body, password: hashpassword });
        return res.send({ user, message: "User added successfully..." })
    } catch (error) {
        console.log(error);
        res.json({ message: "Internal server error..." });
    }
}

exports.getAllUser = async (req, res) => {
    try {
        let users = await User.find({ isDelete: false });
        if (!users) {
            res.send("Users can't find...");
        }
        res.send(users);
    } catch (error) {
        console.log(error);
        res.json({ message: "Internal server error..." });
    }
}

exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false })
        if (!user) {
            res.send("Users can't find...");
        }
        let comparepassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparepassword) {
            res.send("Email or password does not match");
        }
        let token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRETE)
        res.status(200).send({ user, message: "User login success...", token });

    } catch (error) {
        console.log(error);
        res.json({ message: "Internal server error..." });
    }
}


exports.updateUser = async (req, res) => {
    try {
        let user = req.user;
        if (req.body.password) {
            const hashedpassword = await bcrypt.hash(req.body.password, 10);
            req.body.password = hashedpassword;
        }
        user = await User.findByIdAndUpdate(
            user._id,
            { $set: req.body },
            { new: true }
        )

        res.send("User update successfully...");
    } catch (error) {
        console.log(error);
        res.json({ message: "Internal server error..." });
    }
}


exports.getuserProfile = async (req, res) => {
    try {
        res.send("<h1>Welcom to my profile.</h1>");
    } catch (error) {
        console.log(error);
        res.json({ message: "Internal server error..." });
    }
}