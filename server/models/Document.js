const mongoose = require('mongoose')
const Schema = mongoose.Schema
/*
    This is where we specify the format of a single message for Document that we're going to put into
    the database.
    
    @author Andy Yang
*/
const DocumentSchema = new Schema(
    {
        _id: { type: String, required: true},
        data: { type: Object, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Document', DocumentSchema)
