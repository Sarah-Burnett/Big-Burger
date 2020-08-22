export const getDayFromDate = (date) => {
	//TODO:get day from date;
};

export const getAvailableTimes = (day) => {
	const hours = {
		Mon: ["17:00", "21:00"],
		Tues: ["17:00", "21:00"],
		Wed: ["17:00", "21:00"],
		Thurs: ["17:00", "21:00"],
		Fri: ["17:00", "21:00"],
		Sat: ["12:00", "21:00"],
		Sat: ["17:00", "20:00"],
	};
	return hours[day];
};

export const setAvailableTimes = (day) => {
	const timeInput = document.querySelector("#time");
	const hours = getAvailableTimes(day);
	timeInput.min = hours[0];
	timeInput.max = hours[1];
};
