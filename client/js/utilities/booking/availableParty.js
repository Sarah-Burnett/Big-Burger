import { fetch } from "./fetch";
import { GET_AVAILABILITY } from "./types";
import { createDropdownButton } from "../dom/createButton";

export const getAvailableParty = (restaurant, date) => {
	fetch(GET_AVAILABILITY, { restaurant, date });
};

export const setAvailableParty = (sizes) => {
	console.log(sizes);
	const dropdownContainer = document.querySelector('[data-dropdown="party"]');
	dropdownContainer.innerText = "";
	if (sizes.length === 0) {
		dropdownContainer.innerText = "Booking full";
	}
	for (const size of sizes) {
		const newButton = createDropdownButton();
		newButton.innerText = size;
		newButton.dataset.input = "#party";
		newButton.dataset.value = size;
		dropdownContainer.append(newButton);
	}
};
