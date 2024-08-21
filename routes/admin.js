const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.post("/add-product", async (req, res, next)=>{
    const product = new Product(req.body.name, req.body.price);
   
    try {
        await product.save();
    } catch(err) {
        res.status(500).json({ message: "Something went wrong :("});
    }

    res.status(200).json({message: "Product added successfully!"});
});

router.delete("/delete-product", (req, res, next) => {
    console.log('Admin router - Delete product')
})

module.exports = router;