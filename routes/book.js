const router = require("express").Router();
const Booking = require("../models/Booking");
const {
	bookingValidationRules,
	validate,
} = require("../middleware/bookingValidation");
const checkAvailability = require("../middleware/bookingAvailability");
const sumExistingParty = require("../utils/sumExistingParty");

//POST api/booking
//Create single booking
//Public
router.post(
	"/",
	bookingValidationRules(),
	validate,
	checkAvailability,
	(req, res) => {
		const booking = new Booking(req.body);
		booking
			.save()
			.then((booking) => res.send(booking))
			.catch((error) =>
				res.status(500).json({ msg: "Booking not created", error })
			);
	}
);

//GET api/booking
//Check availability of date/time
//Public
router.get("/avail", async (req, res) => {
	const date = new Date(req.query.date);
	const partyTotal = await sumExistingParty(
		req.query.restaurant,
		date.toISOString()
	);
	console.log("total:" + partyTotal);
	const diff = process.env.TOTALBOOKINGSIZE - partyTotal;
	console.log(diff);
	if (diff <= 1) {
		return res.status(409).json({
			msg: "Booking slot full",
			day: req.body.day,
			time: req.body.time,
		});
	} else {
		const party = [];
		for (let i = diff; i >= 2; i--) {
			if (i <= 8) party.unshift(i);
		}
		console.log(party);
		return res.json({ party });
	}
});

module.exports = router;
