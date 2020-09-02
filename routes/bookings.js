const router = require("express").Router();
const mongoose = require("mongoose");
const Booking = require("../models/Booking");

// GET /bookings
// Retrieve all bookings and send to client
//TODO: private

router.get("/", async (req, res) => {
	const bookings = await Booking.find();
	res.render("bookings", { bookings });
});

module.exports = router;
