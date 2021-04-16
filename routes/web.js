const express = require("express");
const router = express.Router();
const {fileUpload} = require("../services/Uploads");

/*
|-------------------------------------------------------------------------------
| Controller Import
|-------------------------------------------------------------------------------
*/
const createPDFController = require("../controllers/createPDFController");
const previewController = require("../controllers/previewController");


/*
|-------------------------------------------------------------------------------
| Route Declearation
|-------------------------------------------------------------------------------
*/

router.route("/")
    .get(createPDFController.createPDF)
    .post(fileUpload.single("document"),createPDFController.createPDFPost)

router.route("/previewPDF/:documentId")
    .get(previewController.previewPDF)
   
router.route("/downloadPDF/:documentId")
    .get(previewController.downloadPDF)
    
/*
|-------------------------------------------------------------------------------
| Route Export
|-------------------------------------------------------------------------------
*/
module.exports = router;

