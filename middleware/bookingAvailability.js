const Booking = require("../models/Booking");

const checkAvailability = (req, res, next) => {
	Booking.find({
		restaurant: req.body.restaurant,
		date: req.body.date,
	})
		.then((bookings) => {
			const partySum = (total, num) => total + num;
			const partyTotal = bookings.reduce(
				(sum, booking) => partySum(sum, parseInt(booking.party)),
				0
			);
			if (
				partyTotal + parseInt(req.body.party) >=
				process.env.TOTALBOOKINGSIZE
			) {
				res.status(409).json({
					msg: "Booking slot full",
					day: req.body.day,
					time: req.body.time,
				});
			} else next();
		})
		.catch((error) =>
			res.status(500).json({ msg: "Booking not saved", error })
		);
};

module.exports = checkAvailability;