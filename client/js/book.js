import { setAvailableDates } from "./utilities/booking/availableDates";
import { handleSubmit } from "./utilities/booking/submitBooking";
import { POST_BOOKING } from "./utilities/booking/types";
import { autoFillForm } from "./utilities/booking/autofillForm";
import { changeFormValue } from "./utilities/booking/changeFormValue";
import { forEach } from "./utilities/dom/forEach";

//preparing form and form Buttons
setAvailableDates(Date.now());
forEach(".dropdownBtn", changeFormValue);

//fill from session storage
if (sessionStorage.booking) {
	autoFillForm(JSON.parse(sessionStorage.booking));
}

// create booking /book
document.querySelector(".postBookForm").onsubmit = (e) =>
	handleSubmit(e, POST_BOOKING, ".bookBtn");
