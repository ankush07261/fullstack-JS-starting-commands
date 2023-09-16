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
//connecting to DB
mongoose.connect('mongodb://localhost:27017/DBname', { useNewUrlParser: true });
//inserting into DB
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

const Name = mongoose.model("Name", NameSchema);

const element1 = new Name({
    //Example matching with the NameSchema format
    name: "apple",
    rating: 7,
    review: " keeps doc away"
})

const element2 = new Name({
    //Example matching with the NameSchema format
    name: "orange",
    rating: 6,
    review: "sweet"
})

Fruit.insertMany([element1, element2], function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("")
    }
    mongoose.connect.close();
});

//reading from the database
Name.find(function (err, NAME) {
    if (err) {
        console.log(err);
    }
    else {
        // console.log(fruitS)
        NAME.forEach(function (element) {
            console.log(element.name);
        });
    }
    mongoose.connect.close();
});

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
