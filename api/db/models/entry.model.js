/* DB MODEL FOR ENTRIES -------------------------- */
const mongoose = require('mongoose');

// --------------------------------------------------
const EntrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    _categoryId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})
// --------------------------------------------------

const Entry = mongoose.model('Entry', EntrySchema);

module.exports = { Entry }