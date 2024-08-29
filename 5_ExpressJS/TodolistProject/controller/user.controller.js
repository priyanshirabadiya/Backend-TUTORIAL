const User = require('../model/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (user) {
            return res.json({ message: "User already exists..." });
        }
        let hashpassword = await bcrypt.hash(req.body.password, 10); // Ensure this is correct
        user = await User.create({ ...req.body, password: hashpassword });
        return res.render('success', { user });
    } catch (error) {
        console.log(error);
        res.json({ message: "Internal server error..." });
    }
};

exports.loginUser = async (req, res) => {
    try {
        console.log("Login attempt with email:", req.body.email);

        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (!user) {
            console.log("User not found");
            return res.send("User does not exist...");
        }

        let comparepassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparepassword) {
            console.log("Password mismatch");
            return res.send("Email or password is incorrect...");
        }

        let token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRETE);
        console.log("Generated token:", token);
        return res.render('success', { user });

    } catch (error) {
        console.log(error);
        res.json({ message: "Internal server error..." });
    }
}


// --------------------- todo list 

// exports.todolist = async (req, res) => {
//     try {
//         let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//         let today = new Date();
//         let day = today.toLocaleDateString("en-US", options);
//         res.render('success', { kindOfday: day });
//     } catch (error) {
//         console.log(error);
//         res.json({ message: "Internal server error..." });
//     }
// }

