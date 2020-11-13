const Booking = require("../models/Booking");

const sumExistingParty = async (restaurant, date, id) => {
	let bookings = await Booking.find({
		restaurant,
		date,
	});
	if (id) bookings = bookings.filter(({ _id }) => _id.toString() !== id);
	const partySum = (total, num) => total + num;
	const partyTotal = bookings.reduce(
		(sum, booking) => partySum(sum, parseInt(booking.party)),
		0
	);
	return partyTotal;
};

module.exports = sumExistingParty;
