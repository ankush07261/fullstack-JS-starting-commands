//for MongoDB & MONGOOSE refer script.js and user.js

//ExpressJS, EJS, body-parser, lodash
//importing modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const _ = require("lodash");

//declarations
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//methods
app.get('/', (req, res) => {
  //res.render('pageName',{});
})

app.post('/', (req, res) => {
  //title = req.body.title;
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
