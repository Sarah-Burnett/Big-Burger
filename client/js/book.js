import { setAvailableDates } from "./utilities/booking/availableDates";
import { handleSubmit } from "./utilities/booking/submitBooking";
import { POST_BOOKING } from "./utilities/booking/types";
import { autoFillForm } from "./utilities/booking/autofillForm";
import { setAvailableTimes } from "./utilities/booking/availableTimes";
import { getAvailableParty } from "./utilities/booking/availableParty";
import { addEventListener } from "./utilities/dom/addEventListener";

//preparing form and select options
setAvailableDates(Date.now());
setAvailableTimes(day.value, restaurant.value);
getAvailableParty(restaurant.value, day.value, time.value);

//change select options when restaurant changes
addEventListener(
	restaurant,
	() => {
		if (day.value) setAvailableTimes(day.value, restaurant.value);
		if (day.value && time.value)
			getAvailableParty(restaurant.value, day.value, time.value);
	},
	"change"
);

//change select options when day changes
addEventListener(
	day,
	() => {
		if (restaurant.value) setAvailableTimes(day.value, restaurant.value);
		if (restaurant.value && time.value)
			getAvailableParty(restaurant.value, day.value, time.value);
	},
	"change"
);

//change select options when time changes
addEventListener(
	time,
	() => {
		if (restaurant.value && day.value)
			getAvailableParty(restaurant.value, day.value, time.value);
	},
	"change"
);

//fill from session storage
if (sessionStorage.booking) {
	autoFillForm(JSON.parse(sessionStorage.booking));
}

// create booking /book
addEventListener(
	".postBookForm",
	(e) => handleSubmit(e, POST_BOOKING, ".bookBtn"),
	"submit"
);
