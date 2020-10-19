import { addMinutes } from "date-fns";
import format from "date-fns/format";
import { createDropdownButton } from "../dom/createButton";
import { forEach } from "../dom/forEach";
import { changeFormValue } from "./changeFormValue";

const openingHours = {
	Glensgaich: {
		Mon: ["17:00", "22:00"],
		Tue: ["17:00", "22:00"],
		Wed: ["17:00", "22:00"],
		Thu: ["17:00", "22:00"],
		Fri: ["17:00", "22:00"],
		Sat: ["12:00", "22:00"],
		Sun: ["12:00", "21:00"],
	},
	Tanygirisau: {
		Mon: ["17:00", "22:00"],
		Tue: ["17:00", "22:00"],
		Wed: ["17:00", "22:00"],
		Thu: ["17:00", "22:00"],
		Fri: ["17:00", "22:00"],
		Sat: ["12:00", "22:00"],
		Sun: ["12:00", "21:00"],
	},
};

export const getAvailableTimes = (date, restaurant) => {
	const times = [];
	let day = format(date, "eee");
	let [opening, closing] = openingHours[restaurant][day];
	opening = date.setHours(opening.substr(0, 2), opening.substr(3));
	closing = date.setHours(closing.substr(0, 2), closing.substr(3));
	let current = opening;
	while (current <= closing) {
		times.push(format(current, "HH:mm"));
		current = addMinutes(current, 30);
	}
	return times;
};

export const setAvailableTimes = (date, restaurant) => {
	const times = getAvailableTimes(date, restaurant);
	const dropdownContainer = document.querySelector('[data-dropdown="time"]');
	dropdownContainer.innerText = "";
	for (const time of times) {
		const newButton = createDropdownButton();
		newButton.innerText = time;
		newButton.dataset.input = "#time";
		newButton.dataset.value = time;
		dropdownContainer.append(newButton);
	}
	forEach('[data-dropdown="time"] button', changeFormValue);
};

// <button
// 				type="button"
// 				class="dropdownBtn"
// 				data-input="#time"
// 				data-value="12:00"
// 				data-day="wkend"
// 			>
// 				12:00
// 			</button>
