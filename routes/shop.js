const express = require('express');

const router = express.Router();

router.get("/product",(req, res, next)=>{
    console.log('Shop router');
    res.send('<h1>response from the route /product</h1>');
})

module.exports = router;