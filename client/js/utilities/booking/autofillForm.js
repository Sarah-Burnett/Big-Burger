import { hideModal } from "../dom/toggleModal";

export const autoFillForm = (data) => {
	const inputs = document.querySelectorAll("input");
	inputs.forEach((input) => {
		if (input.name !== "id") input.value = data[input.name];
	});
	if (document.querySelector(".modal-active")) hideModal();
};
