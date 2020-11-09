import { setAvailableDates } from "./utilities/booking/availableDates";
import { handleSubmit } from "./utilities/booking/submitBooking";
import { POST_BOOKING } from "./utilities/booking/types";
import { autoFillForm } from "./utilities/booking/autofillForm";
import {
	changeInputValue,
	clickEventChangesInputValue,
} from "./utilities/booking/changeInputValue";
import { setAvailableTimes } from "./utilities/booking/availableTimes";
import { getAvailableParty } from "./utilities/booking/availableParty";
import { forEach } from "./utilities/dom/forEach";

//preparing form and form Buttons
setAvailableDates(Date.now());
setAvailableTimes(day.value, restaurant.value);
getAvailableParty(restaurant.value, day.value, time.value);

const hideLaterSelects = (select) => {
	const selects = Array.from(document.querySelectorAll("select"));
	const index = selects.indexOf(select);
	for (let i = index + 1; i < selects.length; i++) {
		console.log(index, i);
		selects[index].value = "";
	}
};

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
