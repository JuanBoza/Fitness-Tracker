const express = require("express"); 
const router = express.Router(); 
const Exercise = require("exercise.js"); 

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "exercise.html"))
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "stats.html"))
});

module.exports = router;