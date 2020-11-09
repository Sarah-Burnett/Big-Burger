import { fetch } from "./fetch";
import { GET_AVAILABILITY } from "./types";
import { changeInputValue } from "./changeInputValue";
import { forEach } from "../dom/forEach";

export const getAvailableParty = (restaurant, day, time, id = null) => {
	return fetch(GET_AVAILABILITY, { restaurant, day, time, id });
};

export const setAvailableParty = (availSizes = [2, 3, 4, 5, 6, 7, 8]) => {
	const allSizes = [2, 3, 4, 5, 6, 7, 8];
	party.innerText = "";
	for (const size of allSizes) {
		const option = document.createElement("option");
		option.value = size;
		option.innerHTML = size;
		if (!availSizes.includes(size)) {
			option.disabled = true;
			option.innerHTML += "- Booking full";
		}
		party.append(option);
	}
	forEach('[data-dropdown="party"] button', changeInputValue);
};
