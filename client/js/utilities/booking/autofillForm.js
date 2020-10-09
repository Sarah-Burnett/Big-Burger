import { format } from "date-fns";
import { hideModal } from "../dom/toggleModal";
export const autoFillForm = (data) => {
	console.log(data);
	const inputs = document.querySelectorAll("input");
	if (typeof data.date !== "string") data.date = format(date, "dd/MM/yyyy");
	inputs.forEach((input) => {
		if (input.name !== "id") input.value = data[input.name];
	});
	if (document.querySelector(".modal-active")) hideModal();
};
