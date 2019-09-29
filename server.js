const { join } = require('path');
const express = require('express');
const { getData } = require('./utils');
const { data } = require('./data.js');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/list', (req, res) => {
    console.log(req.query);

    const { count } = req.query;

    const w = getData(data, count);


    res.send(w);
});

app.get('/user', (req, res) => {
    console.log(req.query);
    res.send(200);
});

app.post('/user', urlencodedParser, (req, res) => {
    console.log('/user: ', req.body);

    res.send(req.body);
});

app.listen(3000, () => console.log('port 3000'));
