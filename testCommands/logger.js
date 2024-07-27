const fs = require('fs');

const logMessage=(message)=>{
 fs.appendFile('app.log', message + '\n', (error)=>{
     if(error){
         console.log("Error happened: ", error);
     } else {
         console.log("Messaged logged: ", message);
     }
 });
}

logMessage('This is a message from logger.js');

module.exports = logMessage;

module.exports.config = {
    logFileName : 'app.log',
    logDirectory: './app.log'
}