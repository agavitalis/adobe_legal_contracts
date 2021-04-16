const Document = require('../models/document');


/*
 * GET /listFiles route to show PDF file lists.
 */
async function listFiles(req, res) {
    let documents = await Document.find({});
    res.render('lists', { documents })
}


/*
 * GET /previewPDF route to show PDF file in AdobeEmbedAPI.
 */
async function previewPDF(req, res) {
    //catch any response on the url
    let documentId = req.params.documentId
    let document = await Document.findOne({_id:documentId});
    res.render('preview', { document })
}


/*
 * GET /downloadPDF To Donload PDF Documents.
 */
async function downloadPDF(req, res) {
   
    let documentId = req.params.documentId
    let document = await Document.findOne({_id:documentId});
    res.download(document.url);
}

//export all the functions
module.exports = {listFiles, previewPDF, downloadPDF };