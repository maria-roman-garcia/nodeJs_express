 const fs = require('fs');

//Write file - replace file if it already exists
fs.writeFile('example.txt', 'some text here', (error)=> {
    if(error){
        console.log(error);
    }
});

//Read file
fs.readFile('example.txt', 'utf-8', (error, data)=> {
    if(error){
        console.log(error);
        return;
    }
    console.log('File data: ', data);
});

//Delete file
fs.unlink('example.txt', (error)=> {
    if(error){
        console.log(error);
    }
});


//Read terminal line
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('whats your name?', (answer)=>{
    console.log(answer);
    process.emit();
});

//Path
const path = require('path');

console.log(path.basename(__filename));
console.log(__filename); //global path

//Make directory
if(fs.existsSync('new_dir')){return};

fs.mkdir('new_dir', (err)=>{
    if(err){
        throw err;
    }
})

//Rename file
fs.renameSync('example.txt', 'example_renamed.txt'); 

//can be used for moving files like
const oldPath = './example_renamed.txt';
const newPath = './new_dir/example_renamed.txt';
fs.rename(oldPath, newPath, (err)=>{
    if (err) {
        throw err;
    } else {
     console.log('Successfully renamed - AKA moved!');
    }
});