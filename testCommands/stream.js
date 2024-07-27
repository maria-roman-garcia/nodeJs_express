const fs = require('fs');

const readStream = fs.createReadStream('./stream/text.md', 'utf-8');
const writeStream = fs.createWriteStream('./stream/text_copy.md', 'utf-8');

/* readStream.on('data', (chunk)=> {
    writeStream.write(chunk);
});

readStream.on('end', ()=>{
    writeStream.end();
}); */

/* Last code same as using pipe: */

readStream.pipe(writeStream).on('error', (err) => {console.log(err)})

readStream.on('close', ()=> {
    process.stdout.write('File copied!');
})
