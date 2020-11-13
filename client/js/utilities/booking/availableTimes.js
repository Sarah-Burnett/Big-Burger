import { addMinutes } from "date-fns";
import format from "date-fns/format";
import { createDate } from "./createDate";

export const openingHours = {
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
	if (!restaurant || !date) return;
	if (typeof date === "string") date = createDate(date);
	const slots = getAvailableTimes(date, restaurant);
	time.innerText = "";
	for (const slot of slots) {
		const option = document.createElement("option");
		option.innerText = slot;
		option.value = slot;
		time.append(option);
	}
};
