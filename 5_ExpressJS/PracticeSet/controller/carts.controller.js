const Cart = require('../model/cart.model');

exports.addtoCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({
            user: req.user._id,
            productId: req.body.productId,
            isDelete: false
        })
        if (cart) {
            return res.json({ message: "Item is already in cart..." });
        }
        cart = await Cart.create({
            user: req.user._id,
            ...req.body
        })
        res.status(201).json({ message: "Cart added", cart });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error..." });
    }
}

exports.getAllCarts = async (req, res) => {
    try {
        let carts = await Cart.find({ user: req.user._id, isDelete: false });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error..." });
    }
}
