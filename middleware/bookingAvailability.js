const Booking = require("../models/Booking");
const sumExistingParty = require("../utils/sumExistingParty");

const checkAvailability = async (req, res, next) => {
	const partyTotal = await sumExistingParty(
		req.body.restaurant,
		new Date(req.body.date)
	);
	if (partyTotal + parseInt(req.body.party) > process.env.TOTALBOOKINGSIZE) {
		res.status(409).json({
			msg: "Booking slot full",
			day: req.body.day,
			time: req.body.time,
		});
	} else next();
};

module.exports = checkAvailability;
