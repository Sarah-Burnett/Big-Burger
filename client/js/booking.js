import {
	findBookingfromURL,
	findBookingfromForm,
} from "./utilities/booking/findBooking";
import { setAvailableDates } from "./utilities/booking/availableDates";
import { changeInputValue } from "./utilities/dom/changeInputValue";
import { editForm } from "./utilities/booking/editForm";
import { handleSubmit } from "./utilities/booking/submitBooking";
import { fetch } from "./utilities/booking/fetch";
import { DELETE_BOOKING, PUT_BOOKING } from "./utilities/booking/types";

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
	btn.addEventListener("click", () => {
		changeInputValue(btn.dataset.input, btn.dataset.value);
	});
});

//edit form
document.querySelector("#editBtn").onclick = (event) => editForm(event);

//booking CRUD
//get existing booking
findBookingfromURL();
document.querySelector("#findBtn").onclick = (e) => findBookingfromForm(e);
// delete booking
document.querySelector("#deleteBtn").onclick = () =>
	fetch(DELETE_BOOKING, { id: document.querySelector("#id").value });
//update booking
document.querySelector(".putBookForm").onsubmit = (e) =>
	handleSubmit(e, PUT_BOOKING, ".bookBtn");
