const express = require('express');
const {check, validationResult } = require('express-validator');
const router = express.Router();
const Booking = require('../models/Booking');

const idValidationRules = () => {
    return [
        check('id').notEmpty().withMessage('Booking id required')
    ]
}

const bookingValidationRules = () => {
    return [
        check('name').notEmpty().isLength({min: 1}).withMessage('Please input your name'),
        check('email').notEmpty().isEmail(),
        check('restaurant').notEmpty().matches(/'Tanygirisau'||'Glensgaich'/),
        check('date').notEmpty().isISO8601(),
        check('time').notEmpty().isLength(5).matches(/^[0-2][0-9]:[03][0]$/),
        check('party').notEmpty().isNumeric().isLength(1)
    ]
}

const validate = (req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (errors.isEmpty()) next();
    else return res.status(400).json(errors)
}

const checkAvailability = (req, res, next) => {
    Booking.find({restaurant: req.body.restaurant, date: req.body.date, time: req.body.time})
        .then((bookings) => {
            const partySum = (total, num) => total + num;
            const partyTotal = bookings.reduce( (sum, booking) => partySum(sum, parseInt(booking.party)), 0);
            console.log(partyTotal);
            if (partyTotal + parseInt(req.body.party) >= process.env.TOTALBOOKINGSIZE ) {
                res.status(409).json({msg: "Booking slot full", date: req.body.date, time: req.body.time})
            } else next();
        })
        .catch(error => res.status(500).json({msg: "Booking not saved", error}))
}

//@route POST api/guest/booking
//@desc Create single booking
//@access Public
router.post('/booking', bookingValidationRules(), validate, checkAvailability, (req, res) => {
    const booking = new Booking(req.body);
    booking.save()
    .then(booking => res.send(booking))
    .catch(error => res.status(500).json({msg: "Booking not created", error}));
});


//@route GET api/guest/booking
//@desc Retrieve single booking
//@access Public
router.get('/booking/:id', idValidationRules(), validate, (req, res) => {
    Booking.findById(req.params.id)
        .then(booking => res.send(booking))
        .catch(error => res.status(404).json({msg: "Booking not found", error}))
})

// {"_id":"5f11b3ed7a594233787c1fac","name":"Laura","email":"laura@gmail.com","restaurant":"Tanygirisau","date":"2020-07-23","time":"14:30","party":"5","message":"","__v":0}

//@route PUT api/guest/booking
//@desc Update single booking
//@access Public
router.put('/booking/:id', bookingValidationRules(), validate, checkAvailability, (req, res) => {
    Booking.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
     .then(booking => res.send(booking))
     .catch(error => res.status(404).json({msg: "Booking not updated", error})) 
})

//@route DELETE api/guest/booking
//@desc Delete single booking
//@access Public
router.delete('/booking/:id', idValidationRules(), validate, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors)
    Booking.deleteOne({_id: req.params.id})
    .then(({n}) => {
        if (n===1) res.json({msg: "Booking deleted"})
        else res.status(500).json({msg: "Booking not deleted"})
    })
    .catch(error => res.status(404).json({msg: "Booking not found", error}))
})


module.exports = router;