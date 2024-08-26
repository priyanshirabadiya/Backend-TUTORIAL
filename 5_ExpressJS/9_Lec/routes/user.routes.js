const express = require('express');
const userRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const { upload } = require('../helpers/imageUpload');
const {
    registerUser,
    loginUser,
    getProfile,
    deleteUser,
    getAll,
    updateProfile,
    specialUser,
    
} = require('../controller/user.controller');


userRoutes.get("/all", getAll);

userRoutes.post("/register" , upload.single('imageUpload') , registerUser);

userRoutes.get("/login", loginUser);

userRoutes.delete("/delete", deleteUser);

userRoutes.get("/me", verifyToken, getProfile);

userRoutes.put("/update", verifyToken, updateProfile);

// userRoutes.get("/special" , specialUser )


module.exports = userRoutes;


