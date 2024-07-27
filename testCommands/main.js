/* LOGGER

const logger = require('./logger');
const {config} = require('./logger');
logger('This is a log message from main.js');
console.log("The logger directory is: ", config.logDirectory);
console.log("The file name is: ", config.logFileName); */

/* FILE MANAGEMENT with fs module */
/* const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files); */

/* READ FILES */
const fs = require('fs');
const text = fs.readFileSync('./app.log', { encoding: 'utf-8'});
console.log(text);