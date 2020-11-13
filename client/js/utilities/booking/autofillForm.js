import { hideModal } from "../dom/toggleModal";

export const autoFillForm = (data) => {
	document.querySelector("#name").value = data.name;
	document.querySelector("#email").value = data.email;
	document
		.querySelectorAll("select")
		.forEach((select) => (select.value = data[select.name]));
	if (document.querySelector(".modal-active")) hideModal();
};
