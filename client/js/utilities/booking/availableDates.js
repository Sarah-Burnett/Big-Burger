import addDays from "date-fns/addDays";
import format from "date-fns/format";
import { createDropdownButton } from "../dom/createButton";

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
	const dropdownContainer = document.querySelector('[data-dropdown="date"]');
	for (const date of dates) {
		const newButton = createDropdownButton();
		newButton.innerText = format(date, "eee do MMM");
		newButton.dataset.input = "#date";
		newButton.dataset.value = format(date, "dd/MM/yyyy");
		dropdownContainer.append(newButton);
		console.log(typeof date, typeof newButton.dataset.value);
	}
};
