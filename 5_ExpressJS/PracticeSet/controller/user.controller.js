// const users = require('../dummy.json')
const User = require('../model/user.model')

exports.addnewUser = async (req, res) => {
    try {
        // const user = await User.findOne({email:req.body.email});
        // if(user){
        //     return res.send("Email already exist....");
        // }
        const {firstName, lastName, email, hobbies, age} = req.body;
        const addUser = await User.create({firstName, lastName, email, hobbies, age});
        res.status(200).json({ addUser, message: "User addded successfully..." });
        // console.log(req.ip);
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

exports.findUser = async (req, res) => {
    try {
        const oneUser = await User.findOne({ firstName:req.query.firstName });
        // const oneUser = await User.findOne(req.query.firstName);
        res.status(200).json(oneUser);
    }
    catch (err) {
        console.log(err);
    }
}








// exports.updateUser = async (req,res) => {
//     try{
//         let user = await User.findbyId(req.query.userId);
//         console.log(user);
//         if(!user){
//             return res.status(404).json
//         }
        
//     }
//     catch(err){
//         console.log(err);
//     }
// }







// exports.addnewUser =  (req, res) => {
//     users.push(req.body);
//     res.send(users);
// }

// exports.findUser = (req, res) => {
//     let id = +req.params.id;
//     let product = users.find((item) => item.id === id);
//     res.json(product);
// }

// exports.replaceUser = (req, res) => {
//     let id = +req.params.id;
//     let userIndex = users.findIndex((user) => user.id === id);
//     users.splice(userIndex, 1, req.body);
//     res.send(users);
// }

// exports.updateUser = (req, res) => {
//     let id = +req.params.id;
//     let userIndex = users.findIndex(user => user.id === id);
//     let User = users[userIndex];
//     users.splice(userIndex, 1, { ...User, ...req.body });
//     res.send(users);
// }
// exports.deleteUser =  (req, res) => {
//     let id = +req.params.id;
//     let userIndex = users.findIndex(user => user.id === id);
//     users.splice(userIndex, 1);
//     // res.send("Deleted")
//     res.send(users);
// }