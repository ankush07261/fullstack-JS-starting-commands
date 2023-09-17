//jshint esversion:6
//MONGODB
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
//connection url
const url = 'mongodb://localhost:27017';
//database name
const dbName = 'name';
//create a new mongoclient
const client = new MongoClient(url);
//use connect method to connect to the server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("connected successfully to server");
    const db = client.db(dbName);
    client.close();
});

//MONGOOSE
const mongoose = require('mongoose');

// in fruit.js
const fruitSchema = new mongoose.Schema({
    name: {                                      //mongoose data validation.
        type: String,
        required: [true,"name needed"]
    },
    rating: {               
        type: Number,
        min: 0,
        max: 10
    } ,
    review: String
});
module.exports = mongoose.model("Fruit", fruitSchema);

//in app.js
//connecting to DB 
mongoose.connect('mongodb://localhost:27017/DBname', { useNewUrlParser: true });

const Fruit = require("./fruit.js");


//ExpressJS, EJS, body-parser, lodash
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const _ = require("lodash");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('pageName',{});
})


app.post('/compose', (req, res) => {
  //title = req.body.title;
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
