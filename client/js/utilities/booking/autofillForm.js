import { hideModal } from "../dom/toggleModal";
import { forEach } from "../dom/forEach";

export const autoFillForm = (data) => {
	console.log(data);
	document.querySelector("#name").value = data.name;
	document.querySelector("#email").value = data.email;
	forEach("select", (select) => (select.value = data[select.name]));
	if (document.querySelector(".modal-active")) hideModal();
};
