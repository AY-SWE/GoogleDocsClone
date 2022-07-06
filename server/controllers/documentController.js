
/*
    This is our back-end API. It provides all the data services
    our database needs. Note that this file contains the controller
    functions for each endpoint for Documents
    
    @author Andy Yang
*/
const Document = require('../models/Document'); 
var ObjectId = require('mongodb').ObjectId;

getDocument = async (id) => {
    if(id === null)
        return;
    const getDocument = await Document.findById(id); 
    if(getDocument)
        return getDocument;

    return await Document.create({_id: id, data: ""})
}

updateDocument = async (id, data) => {
    return await Document.findByIdAndUpdate(id, {data});
}

module.exports = {
    getDocument,
    updateDocument
};