const express = require('express');

const router = express.Router();

router.post("/add-product",(req, res, next)=>{
    console.log("Body object:", req.body);
    const product = req.body.product;

    console.log('Admin router - Add product');
    res.send('<h1>response from the route path /add-product</h1>');
});

router.delete("/delete-product", (req, res, next) => {
    console.log('Admin router - Delete product')
})

module.exports = router;