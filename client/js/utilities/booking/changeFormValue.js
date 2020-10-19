import { addEventListener } from "../dom/addEventListener";
import { setAvailableTimes } from "./availableTimes";

let restaurant = "Glensgaich";

export const changeFormValue = (btn) => {
	addEventListener(btn, () => {
		document.querySelector(btn.dataset.input).value = btn.dataset.value;
		if (btn.dataset.input === "#restaurant") restaurant = btn.dataset.value;
		if (btn.dataset.input === "#day") {
			document.querySelector(btn.dataset.input).dataset.date = btn.dataset.date;
			setAvailableTimes(new Date(btn.dataset.date), restaurant);
		}
		document.activeElement.blur();
	});
};
