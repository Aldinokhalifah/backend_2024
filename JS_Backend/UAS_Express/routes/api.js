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
router.put("/alumni/:id", AlumniController.update); // update data
router.delete("/alumni/:id", AlumniController.destroy); // delete data
router.get("/alumni/:id", AlumniController.show); // get data by id
router.get("/alumni/search/:name", AlumniController.search); // search data by name
router.get("/alumni/status/fresh-graduate", AlumniController.freshGraduate); // get data by status fresh graduate
router.get("/alumni/status/employed", AlumniController.employed); // get data by status employed
router.get("/alumni/status/unemployed", AlumniController.unemployed); // get data by status unemployed
// export router
module.exports = router;