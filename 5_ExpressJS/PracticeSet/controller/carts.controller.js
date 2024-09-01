const Cart = require('../model/cart.model');

exports.addToCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({
            user: req.user._id,
            productId: req.body.productId,
            isDelete: false
        })
        if (cart) {
            res.send({ message: "Item is already in cart..." });
        }
        cart = await Cart.create({
            user: req.user._id,
            ...req.body
        });
        res.status(201).json({ message: "Item is added to cart...", cart })
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server error...");
    }
}

exports.getAllCarts = async (req, res) => {
    try {
        let carts = await Cart.find({ user: req.user._id, isDelete: false })
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server error...");
    }
}


