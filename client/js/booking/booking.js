import {
	findBookingfromURL,
	findBookingfromForm,
} from "./utilities/findBooking";
import { setAvailableDates } from "./utilities/availableDates";
import { setAvailableTimes } from "./utilities/availableTimes";
import { handleSelectBtns } from "./utilities/selectBtns";
import { editForm } from "./utilities/editForm";
import { handleSubmit } from "./utilities/submitBooking";
import { fetch } from "./utilities/fetch";
import { DELETE_BOOKING, POST_BOOKING, PUT_BOOKING } from "./utilities/types";


//preparing form and form Buttons
setAvailableDates(Date.now());
document.querySelector("#date").addEventListener("onchange", (event) => {
	if (event.target.validity.valid) {
		const day = getDayFromDate;
		setAvailableTimes(day);
	}
});
handleSelectBtns();

//edit form
document.querySelector("#editBtn").onclick = (event) => editForm(event);

//booking CRUD
//get existing booking
findBookingfromURL();
document.querySelector("#findBtn").onclick = (e) => findBookingfromForm(e);
// delete booking
document.querySelector("#deleteBtn").onclick = () =>
	fetch(DELETE_BOOKING, document.querySelector("#id").value);
//update booking
const bookBtn = ".bookBtn";
document.querySelector(".putBookForm").onsubmit = (e) =>
	handleSubmit(e, PUT_BOOKING, bookBtn);
