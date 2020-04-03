/* File to compile all the models to import them easily. */

const { Category } = require('./category.model');
const { Entry } = require('./entry.model');

// Exporting. ----------------------------------------------
module.exports = { Category, Entry }