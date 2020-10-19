export const setDate = (date, time) => {
	const mins = parseInt(time.substr(3, 5));
	const hrs = parseInt(time.substr(0, 2));
	date.setMinutes(mins, 0);
	date.setHours(hrs);
	date.toISOString();
	return date;
};
