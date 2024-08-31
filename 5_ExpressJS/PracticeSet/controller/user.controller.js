const User = require('../model/user.model')

exports.addnewUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.send("User already exist....");
        }
        const { firstName, lastName, email, hobbies, age } = req.body;
        const addUser = await User.create({ firstName, lastName, email, hobbies, age });
        res.status(200).json({ addUser, message: "User addded successfully..." });
    }
    catch (err) {
        console.log(err);
    }
}

exports.findAll = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (err) {
        console.log(err);
    }
}





