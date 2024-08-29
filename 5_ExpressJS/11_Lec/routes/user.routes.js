const express = require('express');
const userRoutes = express.Router();
const {
    registerUser,
    getAllUser,
    loginUser,
    updateUser,
    getuserProfile,
    forgotpassword,
    resetPassword
} = require('../controller/user.controller');
const { verifyToken } = require('../helpers/verifyToken');

userRoutes.post('/register', registerUser)

userRoutes.get('/all', getAllUser)

userRoutes.get('/login', loginUser)

userRoutes.get('/me', verifyToken, getuserProfile )

userRoutes.put('/update', verifyToken , updateUser )

userRoutes.post('/forgot' , forgotpassword )

userRoutes.post('/reset:token' , resetPassword )

module.exports = userRoutes;
