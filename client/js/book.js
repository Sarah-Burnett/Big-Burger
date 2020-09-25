import { setAvailableDates } from "./utilities/booking/availableDates";
import { changeInputValue } from "./utilities/dom/changeInputValue";
import { handleSubmit } from "./utilities/booking/submitBooking";
import { POST_BOOKING } from "./utilities/booking/types";
import { autoFillForm } from "./utilities/booking/autofillForm";

//preparing form and form Buttons
setAvailableDates(Date.now());
document.querySelector("#date").addEventListener("onchange", (event) => {
	if (event.target.validity.valid) {
		const day = getDayFromDate;
		setAvailableTimes(day);
	}
});
// form dropdown buttons
document.querySelectorAll(".dropdownBtn").forEach((btn) => {
	btn.addEventListener('click', () => {
		changeInputValue(btn.dataset.input, btn.dataset.value);
	})
}); 

//fill from session storage
if (sessionStorage.booking) {
	autoFillForm(JSON.parse(sessionStorage.booking));
}

// create booking /book
const bookBtn = ".bookBtn";
document.querySelector(".postBookForm").onsubmit = (e) =>
	handleSubmit(e, POST_BOOKING, bookBtn);
