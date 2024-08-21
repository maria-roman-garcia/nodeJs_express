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

/* TESTS */
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

const numbers = [3,7,4,8,7,6,0,1,6];
const orderedNumbers = _.sortBy(numbers);

console.log('result:' + orderedNumbers);