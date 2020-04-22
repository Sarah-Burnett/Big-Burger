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

app.post('/book', (req, res) => {
    const existingBookings = Booking.find({date: req.body.date, time: req.body.time})
        .then((query) => {
            partySum = (total, num) => {
                return total + num
            };
            const partyTotal = query.reduce( (sum, booking) => partySum(sum, parseInt(booking.party)), 0)
            console.log(partyTotal);
            if (partyTotal + parseInt(req.body.party) <= process.env.DBCONNECTION ) {
                const booking = new Booking(req.body);
                booking.save()
                    .then((booking) => {
                        res.send(`Booking successful. <br> Your booking reference is <br>${booking._id} <br> Looking forward to seeing you soon`);
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(400);
                        res.send("Booking error. <br> Please try again or give us a call")
                    });
            } else {
                res.status(403);
                res.send("Booking full at your selected time and date. <br> Please join us at a different time");
            }
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