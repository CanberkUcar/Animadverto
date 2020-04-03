/**
 * MONGOSE MAIN CLASS. -------------------------------------------------------------------------------------------
 * MIDDLEWARE AND ROUTING.
 */

// Variables. --------------------------------------------

const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser'); // Middleware.

// -------------------------------------------------------

// Loads. ------------------------------------------------
// Load Middleware.
app.use(bodyParser.json());

// Load in mongoose Models.
const { Category, Entry } = require('./db/models');

// CORS HEADERS MIDDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// -------------------------------------------------------

/* ROUTE HANDLERS ----------------------------------------------- */


/* CATEGORY ROUTES  --------------------------------------------- */

/**
 * GET /categories.
 * Purpose: Getting existing categories on the DB.
 */
app.get('/categories', (req, res) => {
    // Returns an array of all the categories in the DataBase.
    Category.find().then( (categories) => {
        res.send(categories);
    }).catch((e) => {
        res.send(e);
    });
});

/**
 * POST /categories.
 * Purpose: Creating new categories.
 * NOTE: Category fields passed via JSON request body.
 */
app.post('/categories', (req, res) => {
    // Creates new category.
    let title = req.body.title;

    let newCategory = new Category({
        title
    });
    newCategory.save().then((categoryDoc) => {
        // The full category doc is returned (incl. id)
        res.send(categoryDoc);
    });
    // Return the new category data back to user. (includes id)
});

/**
 * PATCH /categories/:id
 * Purpose: Update an specified category.
 * NOTE: Values and id passed via JSON request body.
 * Params: $set, from MongoDB
 */
app.patch('/categories/:id', (req, res) => {
    // Update spesified category with new values. 
    Category.findOneAndUpdate({ 
        _id: req.params.id }, 
        { $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});

/**
 * DELETE /categories/:id
 * Purpose: Deletes an spesified category.
 */
app.delete('/categories/:id', (req, res) => {
    // Delete spesified category.
    Category.findOneAndRemove({
        _id: req.params.id
    }).then((removedCategDoc) => {
        res.send(removedCategDoc);
    });
});

/* Test Route. -----------------------------------------------------
app.get('/', (req, res) => {
    res.send("Test Message"); // Get request respond.
}) */

/* END CATEGORY ROUTES ------------------------------------------ */


/* ROUTES FOR ENTRIES ------------------------------------------- */

/**
 * GET /categories/:categoryId/entries
 * Purpose: Get all the entries in a specified category.
 */
app.get('/categories/:categoryId/entries', (req, res) => {
    // Return all the entries that belong to a specified category.
    Entry.find({
        _categoryId: req.params.categoryId
    }).then((entries) => {
        res.send(entries);
    });
});

/**
 * GET 2 /categories/:categoryId/entries
 */
app.get('/categories/:categoryId/entries/:entryId', (req, res) => {
    Entry.findOne({
        _id: req.params.entryId,
        _categoryId: req.params.categoryId
    }).then((entry) => {
        res.send(entry);
    })
})

/**
 * POST /categories/:categoryId/entries
 * Purpose: Create a new entry in a specific category.
 */

app.post('/categories/:categoryId/entries', (req,res) => {
    // Creates a new entry in a category specified by: categoryId.
    let newEntry = new Entry({
        title: req.body.title,
        _categoryId: req.params.categoryId
    });
    newEntry.save().then((newEntryDoc) => {
        res.send(newEntryDoc);
    });
});

/**
 * PATCH /categories/:categoryId/entries/:entryId
 * Purpose: Update an existing entry.
 */
app.patch('/categories/:categoryId/entries/:entryId', (req,res) => {
    // Updates an existing entry (specified by entryId)
    Entry.findOneAndUpdate({ 
        _id: req.params.entryId,
        _categoryId: req.params.categoryId
    }, {
        $set: req.body
        }
    ).then(() => {
        res.sendStatus(200);
    })
});

/**
 * DELETE /categories/:categoryId/entries/:entryId
 * Purpose: Deletes and existing entry.
 */
app.delete('/categories/:categoryId/entries/:entryId', (req,res) =>{
    Entry.findOneAndDelete({
        _id: req.params.entryId,
        _categoryId: req.params.categoryId
    }).then((removedEntryDoc) => {
        res.send(removedEntryDoc);
    })
});

app.listen(3000, () => {
    console.log("Server is listen 3000");
});