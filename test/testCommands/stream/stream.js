const fs = require('fs');

//fs.createReadStream()

fs.rename('./stream.js', './stream/./stream.js', (err)=>{throw err});