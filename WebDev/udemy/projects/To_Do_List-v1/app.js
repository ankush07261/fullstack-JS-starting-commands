const express = require('express');
const bodyParser = require('body-parser');
let item = "";
let items = [];
let i = 0;
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get('/', function (req, res) {
    
    let today = new Date();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString("en-US",options)
    // let tday = today.getDay();
    // let day = "";
    // switch (tday) {
    //     case 0: day = "sunday";
    //         break;
    //     case 1: day = "monday";
    //         break;
    //     case 2: day = "tuesday";
    //         break;
    //     case 3: day = "wednesday";
    //         break;
    //     case 4: day = "thurday";
    //         break;
    //     case 5: day = "friday";
    //         break;
    //     case 6: day = "saturday";
    //         break;
    //     default: 
    //         console.log(tday);
    // }
    
    // if (today.getDate() === 6 || today.getDate() === 7) {
    //     day = " weekend";
    // } else {
    //     day = " weekday";
    // }
    res.render('list', { listTitle: day , newlistitems:items});
});

app.post("/", function (req, res) {
    item = req.body.newlist;
    items.push(item);
    res.redirect("/");
})

// app.get("/work", function (req, res) {
//     res.render('list', { listTitle:"workList", newListitems:workItems});
// })



// app.post("/work", function (req, res) {
//     let item = req.body.newitem;
//     workItems.push(item);
//     res.redirect("/work");
// })

app.listen(3000, function () {
    console.log('listening on port 3000');
});