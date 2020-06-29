const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const guestRoutes = require('./routes/guest');
const managerRoutes = require('./routes/manager');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DBCONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('Mongoose connection open'))
    .catch((err) => console.log(`Connection error: ${err.message}`))

app.use(express.static(__dirname + '/views'));
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'pug');

app.use(express.urlencoded({extended: true}));
app.use('/api/guest', guestRoutes);
app.use('/', managerRoutes);
app.use(express.static('./client/dist'))

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});