import { hideModal } from "../dom/toggleModal";
import { setAvailableTimes } from "./availableTimes";
import { getAvailableParty } from "./availableParty";
import { getAvailableDates } from "./availableDates";

export const autoFillForm = (data) => {
	const inputs = document.querySelectorAll("input");
	console.log(data);
	inputs.forEach((input) => {
		if (input.name !== "id") input.value = data[input.name];
		if (input.name === "day") input.dataset.date = data.date;
	});
	if (document.querySelector(".modal-active")) hideModal();
	//create dropdown buttons
	getAvailableDates(Date.now());
	setAvailableTimes(new Date(inputs[3].dataset.date), inputs[2].value);
	getAvailableParty(inputs[2].value, new Date(inputs[3].dataset.date));
};
