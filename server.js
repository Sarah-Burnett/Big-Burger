const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.DBCONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

mongoose.connection
    .on('open', () => {
    console.log('Mongoose connection open');
    })
    .on('error', (err) => {
    console.log('Mongoose connection error');
    console.log(`Connection error: ${err.message}`);
    });


app.use(express.static(__dirname + '/views'));
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(express.static('./client/dist'))

const server = app.listen(3000, () => {
    console.log(`Server is running on port ${server.address().port}`);
});