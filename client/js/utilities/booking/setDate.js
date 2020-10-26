export const setDate = (date, time) => {
	console.log(date, time);
	const mins = parseInt(time.substr(3, 5));
	const hrs = parseInt(time.substr(0, 2));
	console.log(mins, typeof mins);
	console.log(hrs, typeof hrs);
	console.log(date);
	date.setHours(hrs);
	console.log(date);
	date.setMinutes(mins);
	console.log(date);
	date.toISOString();
	return date;
};
