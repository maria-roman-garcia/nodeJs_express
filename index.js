const express = require('express');

const app = express();

//executed on every incoming request
app.use((req, res, next)=>{
    console.log('First middleware');
    next();
});

app.use((req, res, next)=>{
    console.log('Second middleware');
    res.send('<h1>response from the second middleware</h1>');
})

app.listen(3000, () => {
    console.log('Port listening in port 3000');
})