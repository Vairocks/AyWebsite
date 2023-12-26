const express = require('express');
const app = express ();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");


app.use(express.json());
app.use(cors());
app.options("*", cors());
// secure express app
app.use(
  helmet({
    dnsPrefetchControl: false,
    frameguard: false,
    ieNoOpen: false,
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
  console.log("hit");
  //res.send({message:"Hello"});
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Service Listening on PORT:", PORT);
  });