//-----------------------MongoDB--------------------------
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

//-------------------------MONGOOSE-------------------------
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/userDB',{
        useNewUrlParser: true,
        useUnifiedTopology: true
}).then(() => {
    console.log('Connected')
});
const User = require("./users.js");

async function run() {
    //CREATING & SAVING
    const user1 = await User.create({name: "somename", age: 28})
                //OR
    const user1 = new User({ name: "somename", age: 28 });

    await user1.save().then(() => { console.log('Saved')    });

    //UPDATING
    user.name = "another name";
    await user.save()

    //FIND & DELETE
    const user = await User.find({param})
    await User.deleteOne({param})

    //SELECTING AN USER
    const user = await User.where("param").equals("value")

    //CREATING USER2
    const user2 = new User({
        name: "somename",
        age: 28,
        hobbies: ["movies", "coding"],
        address: {
            street: "1st A main rd",
            city: "mumbai"
        }
        //
    });
    
    user2.save()

    user2.sayHI()          //this is a method created in users.js

    const person = await User.find()
    console.log(person);    
}
run();

//with EXPRESSJS/NODEJS, use the following:
app.get("/", async(res,req){
    //with await key word
})

app.post("/", async(res,req){
    //with await key word
})
