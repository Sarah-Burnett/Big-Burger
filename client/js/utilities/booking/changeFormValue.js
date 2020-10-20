import { addEventListener } from "../dom/addEventListener";
import { setAvailableTimes } from "./availableTimes";
import { getAvailableParty } from "./availableParty";
import { setDate } from "./setDate";

export const changeFormValue = (btn) => {
	addEventListener(btn, () => {
		document.querySelector(btn.dataset.input).value = btn.dataset.value;
		if (btn.dataset.input === "#day") {
			document.querySelector(btn.dataset.input).dataset.date = btn.dataset.date;
			setAvailableTimes(
				new Date(btn.dataset.date),
				document.querySelector("#restaurant").value
			);
		}
		if (btn.dataset.input === "#restaurant") {
			setAvailableTimes(
				new Date(document.querySelector("#day").dataset.date),
				btn.dataset.value
			);
		}
		if (btn.dataset.input === "#time") {
			const date = setDate(
				new Date(document.querySelector("#day").dataset.date),
				btn.dataset.value
			);
			getAvailableParty(document.querySelector("#restaurant").value, date);
		}
		document.activeElement.blur();
	});
};
