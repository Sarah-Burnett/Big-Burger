import { hideModal } from "../dom/toggleModal";
export const autoFillForm = (data) => {
	console.log(data);
	const inputs = document.querySelectorAll("input");
	inputs.forEach((input) => {
		console.log(input.name);
		if (input.name !== "id") input.value = data[input.name];
		if (input.name === "day") input.dataset.date = data.date;
	});
	if (document.querySelector(".modal-active")) hideModal();
};
