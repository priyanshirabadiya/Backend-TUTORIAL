const express = require('express');
const userRoutes = express.Router();
const {
    registerUser,
    loginUser,
    todolist
} = require('../controller/user.controller');

userRoutes.get('/register', (req, res) => {
    res.render('user', { user: {} }); // Pass an empty user object for rendering
});

userRoutes.get('/login', (req, res) => {
    res.render('login', { user: {} }); // Pass an empty user object for rendering
});

userRoutes.post('/login', loginUser);

userRoutes.post('/register', registerUser);

// --------- To do list ---------

// userRoutes.get('/todo' , todolist )

module.exports = userRoutes;
