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
editBtn.onclick = (e) => {
	editForm(e);
	getAvailableParty(restaurant.value, day.value, time.value, id.value);
};

//change select options when restaurant changes
restaurant.onchange = () => {
	if (day.value) setAvailableTimes(day.value, restaurant.value);
	if (day.value && time.value)
		getAvailableParty(restaurant.value, day.value, time.value);
};

//change select options when day changes
day.onchange = () => {
	if (restaurant.value) setAvailableTimes(day.value, restaurant.value);
	if (restaurant.value && time.value)
		getAvailableParty(restaurant.value, day.value, time.value);
};

//change select options when time changes
time.onchange = () => {
	if (restaurant.value && day.value)
		getAvailableParty(restaurant.value, day.value, time.value);
};

//booking CRUD
//get existing booking
findBookingfromURL();
findBtn.onclick = (e) => findBookingfromForm(e);

// delete booking
deleteBtn.onclick = () =>
	fetch(DELETE_BOOKING, { id: document.querySelector("#id").value });

//update booking
document.querySelector(".putBookForm").onsubmit = (e) =>
	handleSubmit(e, PUT_BOOKING, ".bookBtn");
