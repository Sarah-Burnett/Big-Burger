const Booking = require("../models/Booking");

const sumExistingParty = async (restaurant, date) => {
	console.log("function args:");
	console.log(restaurant, date);
	const bookings = await Booking.find({
		restaurant,
		date,
	});
	console.log("db: " + bookings);
	const partySum = (total, num) => total + num;
	const partyTotal = bookings.reduce(
		(sum, booking) => partySum(sum, parseInt(booking.party)),
		0
	);
	return partyTotal;
};

module.exports = sumExistingParty;
