export const setDate = (date, time) => {
	console.log(date);
	const mins = parseInt(time.substr(3, 5));
	const hrs = parseInt(time.substr(0, 2));
	date.setMinutes(mins, 0);
	date.setHours(hrs);
	date.toISOString();
	return date;
};
