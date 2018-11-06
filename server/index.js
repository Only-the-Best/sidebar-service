const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('express');
const Bars = require('../database/Bars.js');
const path = require('path');

const PORT = 3000;

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/sidebar/', function(req, res) {
    Bars.getInfo(req.params.page, res);
}) 

app.get('/api/sidebar/:page', function(req, res) {
    Bars.getInfo(req.params.page, res);
}) 

app.get('/:page', function(req, res) {
    res.sendFile(path.join(`${__dirname}/../client/dist/index.html`));
})

// app.post('/api/sidebar', function(req, res) {
//     console.log('post request', req);
// })


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})