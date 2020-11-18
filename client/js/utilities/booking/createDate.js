// date in format dd/mm/yy
// time in format hh:mm
export const createDate = (date, time = "17:00") => {
	const day = parseInt(date.substr(0, 2));
	const month = parseInt(date.substr(3, 5)) - 1;
	const year = parseInt(date.substr(6));
	const hour = parseInt(time.substr(0, 2));
	const mins = parseInt(time.substr(3, 5));
	return new Date(year, month, day, hour, mins);
};
