const express = require('express');
const routes = express.Router();
const { verifyToken } = require('../helpers/verifyToken')
const {
    addnewUser,
    findAll,
} = require('../controller/user.controller');
const { addtoCart, getAllCarts } = require('../controller/carts.controller');

routes.post("/add", addnewUser)

routes.get("/all", findAll);

routes.get("/all", findAll);

routes.post("/addcart", verifyToken, addtoCart);

routes.post("/allcarts", verifyToken, getAllCarts);

module.exports = routes;