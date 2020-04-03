/* This file handlse connection logic to the MongoDB */

const mongoose = require('mongoose');

// Apperantly mongoose uses BlueBird for promises.
// Making it global JavaScript Promise.
mongoose.Promise = global.Promise;

// ---------------------------------------------------------------------------------

mongoose.connect('mongodb://localhost:27017/animadverto', { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB WELL DONE!");
    })
    .catch((e) => {
        console.log("Error while attempting to connect to MongoDB");
        console.log(e);
    });

// ---------------------------------------------------------------------------------

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = { mongoose };