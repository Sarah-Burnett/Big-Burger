import { addEventListener } from "../dom/addEventListener";
import { setAvailableTimes } from "./availableTimes";

let restaurant = "Glensgaich";

export const changeFormValue = (btn) => {
	addEventListener(btn, () => {
		console.log(btn);
		document.querySelector(btn.dataset.input).value = btn.dataset.value;
		document.activeElement.blur();
		if (btn.dataset.input === "#restaurant") restaurant = btn.dataset.value;
		if (btn.dataset.input === "#date") {
			setAvailableTimes(new Date(btn.dataset.value), restaurant);
		}
	});
};
