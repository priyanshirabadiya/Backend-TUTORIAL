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

// ------------------------------------ forgot password -----------------------------
exports.forgotpassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).send("Please provide an email...");
        }

        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            return res.status(400).send("Please register first...");
        }

        const token = jwt.sign({ email }, process.env.JWT_SECRETE);
        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            auth: {
                user: process.env.MY_GMAIL,
                pass: process.env.GOOGLE_APP_PASS
            }
        });

        const receiver = {
            from: process.env.MY_GMAIL,
            to: email,
            subject: "Password reset request",
            text: `Click on this link to reset your password: ${process.env.CLIENT_URL}/reset-password/${token}`
        };

        await transporter.sendMail(receiver);
        return res.status(200).send({ message: "Password reset link sent successfully to your Gmail account." });

    } catch (error) {
        console.log("Error sending email:", error);
        res.status(500).json({ message: "Internal server error..." });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { token } = req.params; // Retrieve token from request parameters
        const { password } = req.body; // Retrieve password from request body

        if (!password) {
            return res.status(400).send({ message: "Please provide a password" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRETE); // Verify the JWT token

        // Find the user based on the email decoded from the token
        const user = await User.findOne({ email: decoded.email });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        // Hash the new password
        const newHashedPassword = await bcrypt.hash(password, 10);

        // Update user's password
        user.password = newHashedPassword;
        await user.save();

        return res.status(200).send({ message: "Password reset successfully." });

    } catch (error) {
        console.log("Error resetting password:", error);
        res.status(500).json({ message: "Internal server error..." });
    }
};
