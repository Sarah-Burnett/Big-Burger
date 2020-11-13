import { addClassList, removeClassList } from "../dom/toggleClassList";

const inputs = document.querySelectorAll("input");
const selects = document.querySelectorAll("select");
const errorBoxes = document.querySelectorAll(".error");

const fields = Array.from(inputs).concat(Array.from(selects));

export const showError = (index) => {
	addClassList(errorBoxes[index], "errorActive");
	addClassList(fields[index], "inputInvalid");
	fields[index].scrollIntoView();
};

export const removeError = (index) => {
	fields[index].oninput = () => {
		if (fields[index].validity.valid) {
			removeClassList(fields[index], "inputInvalid");
			removeClassList(errorBoxes[index], "errorActive");
		}
	};
};

export const validateBooking = () => {
	let error = false;
	fields.forEach((input, index) => {
		if (!input.validity.valid) {
			error = true;
			showError(index);
			removeError(index);
		}
	});
	return error;
};
