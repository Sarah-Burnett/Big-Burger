const express = require('express');
const mongoose = require('mongoose');
const {check, validationResult } = require('express-validator');
const router = express.Router();
const Booking = require('../models/Booking');

//@route POST api/guest/booking
//@desc Create single booking
//@access Public --> need to edit the below to make private probably
router.post('/booking', [
    check('name').notEmpty().isLength({min: 1}).withMessage('Please input your name'),
    check('email').notEmpty().isEmail(),
    check('restaurant').notEmpty().matches(/'Tanygirisau'||'Glensgaich'/),
    check('date').notEmpty().isISO8601(),
    check('time').notEmpty().isLength(5), // need to edit regex for time
    check('party').notEmpty().isNumeric().isLength(1)
], (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) return res.status(422).json(errors)
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


//@route GET api/guest/booking
//@desc Retrieve single booking
//@access Private
router.get('/booking/:id', (req, res) => {
    Booking.findById(req.params.id)
        .then((booking) => res.send(booking))
        .catch((error) => {res.status(404); res.send({response: "No booking"})})
})

//@route DELETE api/guest/booking
//@desc Delete single booking
//@access Public
router.delete('/booking/:id', (req, res) => {
    Booking.deleteOne({_id: req.params.id})
    .then(({n}) => {
        if (n===1) res.send({response: "Booking deleted"})
        else {res.status(500); res.send({response: "Error! Please try again"})}
    })
    .catch((error) => {res.status(404); res.send({response: "No booking"})})
})

//@route PUT api/guest/booking
//@desc Update single booking
//@access Public
router.put('/booking/:id', (req, res) => {
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