const express = require("express");
const router = express.Router();        // express library's Router method
const docController = require("../controllers/documentController");

//GET
router.get("/find/:id", docController.getDocument)  

module.exports = router;