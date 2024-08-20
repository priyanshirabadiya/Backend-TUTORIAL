// const User = require('../model/user.model'); // database

// exports.addNewuser = async (req, res) => {
//     try {
//         let user = await User.findOne({ email: req.body.email });
//         if(user){
//             return res.status(400).json({message:"User already exist..."});
//         }
//         const adduser = await User.create(req.body);
//         res.status(200).json({ adduser, message: "User added successfully..." });
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ "message": "Sorry can't set data." });
//     }
// }

// exports.getAllusers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Internal server error..." });
//     }
// }

// exports.getSingleuser = async (req, res) => {
//     try {
//         // const user = await User.findOne({ firstName: req.query.firstName }); // give perticular name in object for find string data
//         const user = await User.findOne({ _id: req.query._userId }); // _userId : give this name as per key name  
//         // const user = await User.findById(req.query.userId);  // only findById is allow direct use req.query.userId 
//         if (!user) {
//             return res.status(404).json({ message: "User not found..." });
//         }
//         res.status(200).json(user);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Internal server error..." });
//     }
// }


// ------------------------------ new practice ------------------------------

const User = require('../model/user.model');

exports.addnewUser = async (req, res) => {

    const user = await User.findOne({ id: req.body.id })
    if (user) {
        res.send("Is is already exist...");
    }
    const addUser = await User.create(req.body);
    res.status(200).json({ addUser, message: "User added success..:" });
}

exports.getallUsers = async (req, res) => {
    const allUr = await User.find();
    res.send(allUr);
    res.status(200).json({ addUser, message: "Get all the users...:" });
}
                    



