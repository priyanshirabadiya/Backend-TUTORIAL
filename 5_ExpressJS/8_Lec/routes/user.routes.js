
// const express = require('express');
// const userRoutes = express.Router();

// const {
//     addNewuser,
//     getAllusers,
//     getSingleuser
// } = require('../controller/user.controller')

// userRoutes.get("/add", addNewuser);

// userRoutes.get('/all',getAllusers);

// userRoutes.get('/single',getSingleuser);

// module.exports = userRoutes;

// ----------------------------------------- new pratice --------------------------------


const express = require("express");
const routes = express.Router();

const {
    addnewUser,
    getallUsers
} = require("../controller/user.controller")

routes.get("/add",addnewUser);

routes.post("/all" , getallUsers);

module.exports = routes;


