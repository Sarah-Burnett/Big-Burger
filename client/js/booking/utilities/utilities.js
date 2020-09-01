import { hideModal } from '../../index/modal';

export const setInnerHTML = (id, html) => {
	console.log(id, html);
	document.querySelector(id).innerHTML = html;
};

export const disableButton = (button) => {
	document.querySelector(button).disabled = true;
};

export const autoFillForm = (data) => {
	const inputs = document.querySelectorAll("input");
	console.log(inputs);
	inputs.forEach((input) => {
		if (input.name !== "id") input.value = data[input.name];
	});
	if (document.querySelector(".modal-active")) hideModal();
};

const changeInputValue = (input, value) =>
	(document.querySelector(input).value = value);

