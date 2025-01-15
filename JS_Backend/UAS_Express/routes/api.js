// import AlumniController
const AlumniController = require("../controllers/AlumniController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
    res.send("Hello Alumni");
});

// Membuat routing alumni
router.get("/alumni", AlumniController.index); // get all data
router.post("/alumni", AlumniController.store); // create data
// export router
module.exports = router;