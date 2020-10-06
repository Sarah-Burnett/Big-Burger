import { setAvailableDates } from "./utilities/booking/availableDates";
import { changeInputValue } from "./utilities/dom/changeInputValue";
import { handleSubmit } from "./utilities/booking/submitBooking";
import { POST_BOOKING } from "./utilities/booking/types";
import { autoFillForm } from "./utilities/booking/autofillForm";
import { getAvailableTimes } from "./utilities/booking/availableTimes";

let restaurant = "Glensgaich";

//preparing form and form Buttons
setAvailableDates(Date.now());

// form dropdown buttons
document.querySelectorAll(".dropdownBtn").forEach((btn) => {
	btn.addEventListener("click", (event) => {
		changeInputValue(btn.dataset.input, btn.dataset.value);
		document.activeElement.blur();
		if (btn.dataset.input === "#restaurant") restaurant = btn.dataset.value;
		if (btn.dataset.input === "#date") {
			console.log(btn.dataset.value);
			getAvailableTimes(new Date(btn.dataset.value), restaurant);
		}
	});
});

//fill from session storage
if (sessionStorage.booking) {
	autoFillForm(JSON.parse(sessionStorage.booking));
}

// create booking /book
const bookBtn = ".bookBtn";
document.querySelector(".postBookForm").onsubmit = (e) =>
	handleSubmit(e, POST_BOOKING, bookBtn);
