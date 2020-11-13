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
<<<<<<< HEAD
	const dropdownContainer = document.querySelector('[data-dropdown="date"]');
	for (const date of dates) {
		const newButton = document.createElement("button");
		newButton.classList.add("dropdownBtn");
		newButton.type = "button";
		newButton.innerText = format(date, "eee do MMM");
		newButton.dataset.input = "#date";
		newButton.dataset.value = format(date, "dd/MM/yyyy");
		newButton.dataset.date = date;
		dropdownContainer.append(newButton);
	}
	document.querySelector("input[name ='date']").value = format(
		dates[0],
		"dd/MM/yyyy"
	);
=======
	day.innerHTML = "";
	for (const date of dates) {
		const option = document.createElement("option");
		option.value = format(date, "dd/MM/yyyy");
		option.innerHTML = format(date, "eee do MMM");
		day.append(option);
	}
	day.value = format(dates[0], "dd/MM/yyyy");
>>>>>>> dates
};


