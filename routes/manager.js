const express = require('express');
const mongoose = require('mongoose');
const {check, validationResult } = require('express-validator');
const router = express.Router();
const Booking = require('../models/Booking');

//@route POST api/manager/bookings
//@desc Get all bookings
//@access Private
router.get('/bookings', (req, res) => {
    Booking.find()
        .then((bookings) => res.send(bookings))
        .catch((error) => {res.status(404); res.send({response: "No bookings"})})
})

// filtering bookings server side
router.get('/bookings/:restaurant/:date', (req, res) => {
    Booking.find({restaurant: req.params.restaurant, date: req.params.date})
    .then((bookings) => res.render('bookings', {bookings}))
    .catch((error) => {res.status(404); res.send({response: "No bookings"})})
});

router.get('/bookings/:restaurant/:date/:time', (req, res) => {
    Booking.find({restaurant: req.params.restaurant, date: req.params.date, time: req.params.time})
    .then((bookings) => res.render('bookings', {bookings}))
    .catch((error) => {res.status(404); res.send({response: "No bookings"})})
});

router.get('/bookings/:id', (req, res) => {
    Booking.findById(req.params.id)
    .then((bookings) => res.render('bookings', {bookings}))
    .catch((error) => {res.status(404); res.send({response: "No booking"})})
});

module.exports = router;