import { addMinutes } from "date-fns";
import format from "date-fns/format";

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
	console.log(date, restaurant);
	let day = format(date, "eee");
	let [opening, closing] = openingHours[restaurant][day];
	opening = date.setHours(opening.substr(0, 2), opening.substr(3));
	closing = date.setHours(closing.substr(0, 2), closing.substr(3));
	let current = opening;
	while (current <= closing) {
		times.push(format(current, "HH:mm"));
		current = addMinutes(current, 30);
	}
	console.log(day, times);
};

export const setAvailableTimes = () => {
	const dropdownContainer = document.querySelector('[data-dropdown="date"]');
	dates.forEach((date) => {
		const newButton = document.createElement("button");
		newButton.innerText = format(date, "eee eo MMM");
		newButton.classList.add("dropdownBtn");
		newButton.dataset.input = "#date";
		newButton.dataset.value = format(date, "ee/MM/yyyy");
		newButton.type = "button";
		dropdownContainer.append(newButton);
	});
	console.log(dropdownContainer);
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
