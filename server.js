const express = require("express");

const logger = require("morgan");
const mongoose = require("mongoose");
//const db = mongoose.connection;


const PORT = process.env.PORT || 3000;
const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

/*mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
*/ 

const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");
app.use(apiRouter);
app.use(htmlRouter);



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


app.listen(PORT, function(){
  console.log('app running')
}); 
