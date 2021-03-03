const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

require("routes/api-routes.js")(app);

app.get("index.html", (req, res) => {
    res.sendFile(path.join(__dirname + "index.html"));
});

app.get("exercise.html", (req, res) => {
    res.sendFile(path.join(__dirname + "exercise.html"));
});

app.get("stats.html", (req, res) => {
    res.sendFile(path.join(__dirname + "stats.html"));
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});