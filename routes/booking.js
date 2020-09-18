const router = require("express").Router();
const Booking = require("../models/Booking");
const {
	bookingValidationRules,
	validate,
} = require("../middleware/bookingValidation");
const checkAvailability = require("../middleware/bookingAvailability");

//GET api/booking
//Retrieve single booking
router.get("/:id", (req, res) => {
	if (!req.params.id) return res.status(400).json({ msg: "No booking id" });
	Booking.findById(req.params.id)
		.then((booking) => res.send(booking))
		.catch((error) =>
			res.status(404).json({ msg: "Booking not found", error })
		);
});

//PUT api/booking
//Update single booking
router.put(
	"/:id",
	bookingValidationRules(),
	validate,
	checkAvailability,
	(req, res) => {
		Booking.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		})
			.then((booking) => res.send(booking))
			.catch((error) =>
				res.status(404).json({ msg: "Booking not updated", error })
			);
	}
);

// DELETE api/booking
// Delete single booking
router.delete("/:id", (req, res) => {
	if (!req.params.id) return res.status(400).json({msg: "No booking id"});
	Booking.deleteOne({ _id: req.params.id })
		.then(({ n }) => {
			if (n === 1) res.json({ msg: "Booking deleted" });
			else res.status(500).json({ msg: "Booking not deleted" });
		})
		.catch((error) =>
			res.status(404).json({ msg: "Booking not found", error })
		);
});

module.exports = router;
