import addDays from "date-fns/addDays";
import format from "date-fns/format";

export const getAvailableDates = (today) => {
	let current = today;
	const dates = [];
	for (let i = 0; i <= 13; i++) {
		current = addDays(current, 1);
		dates.push(current);
	}
	return dates;
};

export const setAvailableDates = (today) => {
	const dates = getAvailableDates(today);
	day.innerHTML = "";
	for (const date of dates) {
		const option = document.createElement("option");
		option.value = format(date, "dd/MM/yyyy");
		option.innerHTML = format(date, "eee do MMM");
		day.append(option);
	}
	day.value = format(dates[0], "dd/MM/yyyy");
};


