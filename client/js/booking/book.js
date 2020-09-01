import { setAvailableDates } from "./utilities/availableDates";
import { setAvailableTimes } from "./utilities/availableTimes";
import { changeInputValue } from "./utilities/utilities";
import { handleSubmit } from "./utilities/submitBooking";
import {POST_BOOKING} from "./utilities/types";
import { autoFillForm } from "./utilities/utilities";

//preparing form and form Buttons
setAvailableDates(Date.now());
document.querySelector("#date").addEventListener("onchange", (event) => {
	if (event.target.validity.valid) {
		const day = getDayFromDate;
		setAvailableTimes(day);
	}
});
// form dropdown buttons
document.querySelector(".dropdownButton").forEach((btn) => {
	changeInputValue(btn.dataset.input, btn.dataset.value);
}); 

//fill from session storage
if (sessionStorage.booking) {
	autoFillForm(JSON.parse(sessionStorage.booking));
}

// create booking
const bookBtn = ".bookBtn";
document.querySelector(".postBookForm").onsubmit = (e) =>
	handleSubmit(e, POST_BOOKING, bookBtn);
