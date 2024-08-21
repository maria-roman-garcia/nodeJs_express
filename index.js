const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//parse request bodys
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res, next) => {
    console.log("Root route");
    res.send('<h1>response from the Root route</h1>');
});

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.listen(3000, () => {
    console.log('Port listening in port 3000');
})