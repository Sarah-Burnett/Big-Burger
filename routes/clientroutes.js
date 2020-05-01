const express = require('express');
const mongoose = require('mongoose');
//const {check, validationResult } = require('express-validator');
const router = express.Router();
const Booking = require('../models/Booking');


router.post('/book', (req, res) => {
    Booking.find({restaurant: req.body.restaurant, date: req.body.date, time: req.body.time})
        .then((query) => {
            partySum = (total, num) => {
                return total + num
            };
            const partyTotal = query.reduce( (sum, booking) => partySum(sum, parseInt(booking.party)), 0)
            if (partyTotal + parseInt(req.body.party) <= process.env.TOTALBOOKINGSIZE ) {
                const booking = new Booking(req.body);
                booking.save()
                    .then((booking) => res.send(booking))
                    .catch((err) => {res.status(400); res.send(err)});
            } else {res.status(403); res.send({error: "booking full", date: req.body.date, time: req.body.time})}    
        })
        .catch((err) => {res.status(500); res.send(err)})
});

router.get('/booking/', (req, res) => {
    Booking.findById(req.query.id)
    .then((booking) => res.render('booking', {booking}))
    .catch((error) => {res.status(404); res.send({response: "No booking"})})
})

router.delete('/booking/:id', (req, res) => {
    Booking.deleteOne({_id: req.params.id})
    .then(({n}) => {
        if (n===1) res.send({response: "Booking deleted"})
        else {res.status(500); res.send({response: "Error! Please try again"})}
    })
    .catch((error) => {res.status(404); res.send({response: "No booking"})})
})

router.post('/booking/:id', (req, res) => {
    Booking.find({restaurant: req.body.restaurant, date: req.body.date, time: req.body.time})
        .then((query) => {
            partySum = (total, num) => total + num;
            const partyTotal = query.reduce( (sum, booking) => partySum(sum, parseInt(booking.party)), 0)
            if (partyTotal + parseInt(req.body.party) <= process.env.TOTALBOOKINGSIZE ) {
                Booking.findByIdAndUpdate(req.params.id, req.body, {new: true})
                    .then((booking) => res.send(booking))
                    .catch((err) => {res.status(400); res.send(err)})
            } else {res.status(403); res.send({error: "booking full", date: req.body.date, time: req.body.time})}
        })    
        .catch((err) => {res.status(400); res.send(err)});
})

module.exports = router;