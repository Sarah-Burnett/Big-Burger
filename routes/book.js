const router = require("express").Router();
const Booking = require("../models/Booking");
const {
	bookingValidationRules,
	validate,
} = require("../middleware/bookingValidation");
const checkAvailability = require("../middleware/bookingAvailability");
const sumExistingParty = require("../utils/sumExistingParty");
const createDate = require("../utils/createDate");

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
	const date = createDate(req.query.day, req.query.time);
	const partyTotal = await sumExistingParty(
		req.query.restaurant,
		date.toISOString(),
		req.query.id
	);
	const diff = process.env.TOTALBOOKINGSIZE - partyTotal;
	const party = [];
	for (let i = diff; i >= 2; i--) {
		if (i <= 8) party.unshift(i);
	}
	console.log({ party });
	return res.json({ party });
});

module.exports = router;
