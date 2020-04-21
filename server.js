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

app.post('/book', async (req, res) => {
    const booking = new Booking(req.body);
    await booking.save()
    .then((booking) => {
        res.send(booking._id);
    })
    .catch((err) => {
        console.log(err);
        res.status(400);
      });
});

app.get('/bookings/date/:date', (req, res) => {
    Booking.find({date: req.params.date})
        .then((query) => res.send(query));
});

app.get('/bookings/id/:id', (req, res) => {
    Booking.findById(req.params.id)
        .then((query) => res.send(query));
});

app.use(express.static('./client/dist'));

const server = app.listen(3000, () => {
    console.log(`Server is running on port ${server.address().port}`);
});