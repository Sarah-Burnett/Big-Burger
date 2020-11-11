import { setAvailableDates } from "./utilities/booking/availableDates";
import { handleSubmit } from "./utilities/booking/submitBooking";
import { POST_BOOKING } from "./utilities/booking/types";
import { autoFillForm } from "./utilities/booking/autofillForm";
import { setAvailableTimes } from "./utilities/booking/availableTimes";
import { getAvailableParty } from "./utilities/booking/availableParty";

//preparing form and select options
setAvailableDates(Date.now());
setAvailableTimes(day.value, restaurant.value);
getAvailableParty(restaurant.value, day.value, time.value);

restaurant.onchange = () => {
	if (day.value) setAvailableTimes(day.value, restaurant.value);
	if (day.value && time.value)
		getAvailableParty(restaurant.value, day.value, time.value);
};

day.onchange = () => {
	if (restaurant.value) setAvailableTimes(day.value, restaurant.value);
	if (restaurant.value && time.value)
		getAvailableParty(restaurant.value, day.value, time.value);
};

time.onchange = () => {
	if (restaurant.value && day.value)
		getAvailableParty(restaurant.value, day.value, time.value);
};

//fill from session storage
if (sessionStorage.booking) {
	autoFillForm(JSON.parse(sessionStorage.booking));
}

// create booking /book
document.querySelector(".postBookForm").onsubmit = (e) =>
	handleSubmit(e, POST_BOOKING, ".bookBtn");
