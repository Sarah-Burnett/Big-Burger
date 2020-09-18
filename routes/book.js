const router = require("express").Router();
const Booking = require("../models/Booking");
const {
	bookingValidationRules,
	validate,
} = require("../middleware/bookingValidation");
const checkAvailability = require("../middleware/bookingAvailability");

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

module.exports = router;
