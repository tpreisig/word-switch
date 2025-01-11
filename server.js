const express = require('express');
const bodyParser = require('body-parser');
const logToConsole = require('./logToConsole');

const app = express();
const PORT = process.env.PORT || 7890;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let vocXdata;

app.get('/', (req, res) => {
    res.render("index.ejs", {
        vocX: vocXdata
    });
})

app.post("/more", (req, res) => {
    logToConsole(req.body.details);
    switch (req.body.details) {
        case "spry":
            vocXdata = require('./data.json')[0];
            break;
        case "concession":
            vocXdata = require('./data.json')[1];
            break;
        case "obscuration":
            vocXdata = require('./data.json')[2];
            break;
        case "consecutive":
            vocXdata = require('./data.json')[3];
            break;
        case "succeed":
            vocXdata = require('./data.json')[4];
            break;
        case "deduction":
            vocXdata = require('./data.json')[5];
            break;
        case "adulate":
            vocXdata = require('./data.json')[6];
            break;
        case "commotion":
            vocXdata = require('./data.json')[13];
            break;
        case "dissent":
            vocXdata = require('./data.json')[14];
            break;
        case "curtail":
            vocXdata = require('./data.json')[19];
            break;
        case "inaugural":
            vocXdata = require('./data.json')[7];
            break;
        case "disclosure":
            vocXdata = require('./data.json')[23];
            break;
        case "yield":
            vocXdata = require('./data.json')[12];
            break;
        default:
            break;
    }
    res.redirect('/');

})

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}.`)
});


