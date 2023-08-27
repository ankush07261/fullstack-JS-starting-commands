//jshint esversion:6
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//connection url
const url = 'mongodb://localhost:27017';

//database name
const dbName = 'fruitsDB';

//create a new mongoclient
const client = new MongoClient(url);

//use connect method to connect to the server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("connected successfully to server");

    const db = client.db(dbName);

    client.close();
});