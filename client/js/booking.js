import {
	findBookingfromURL,
	findBookingfromForm,
} from "./utilities/booking/findBooking";
import { editForm } from "./utilities/booking/editForm";
import { fetch } from "./utilities/booking/fetch";
import { DELETE_BOOKING, PUT_BOOKING } from "./utilities/booking/types";
import { setAvailableDates } from "./utilities/booking/availableDates";
import { handleSubmit } from "./utilities/booking/submitBooking";
import {
	getAvailableParty,
	setAvailableParty,
} from "./utilities/booking/availableParty";
import { setAvailableTimes } from "./utilities/booking/availableTimes";

setAvailableDates(Date.now());
setAvailableTimes(day.value, restaurant.value);
setAvailableParty();

//edit form
document.querySelector("#editBtn").onclick = (event) => {
	editForm(event);
	getAvailableParty(restaurant.value, day.value, time.value, id.value);
};

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
