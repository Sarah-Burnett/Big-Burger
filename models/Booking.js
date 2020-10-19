const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	restaurant: { type: String, required: true },
	date: { type: Date, required: true },
	day: { type: String, required: true },
	time: { type: String, required: true },
	party: { type: String, required: true },
	message: String,
});

module.exports = mongoose.model("Booking", bookingSchema);
