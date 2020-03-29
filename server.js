const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./models/Booking');

const app = express();
const Booking = mongoose.model('Booking');

app.use(bodyParser.urlencoded({ extended: true }));


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

app.post('/submit', (req, res) => {
    const booking = new Booking(req.body);
    booking.save()
        .then(() => res.send("Booking successful. Looking forward to seeing you soon"))
        .catch((err) => {
            console.log(err);
            res.send("Booking error. Please try again or give us a call");
          });
});

app.use(express.static('dist'));

const server = app.listen(3000, () => {
    console.log(`Server is running on port ${server.address().port}`);
});