const express = require('express');
const route = express.Router();
const users = require('../dummy.json');
const {
    addnewUser,
    findAll,
    findUser,
    replaceUser,
    updateUser,
    deleteUser
} = require('../controller/user.controller')

route.post("/add-new", addnewUser)

// route.get("/add", (req, res) => {
//     users.push(req.body);
//     res.send(users);
// })

route.post("/", findAll);

// route.post("/", findUser)

// route.put("/:id", replaceUser)

route.put("/", updateUser);

route.delete("/", deleteUser)

module.exports = route;