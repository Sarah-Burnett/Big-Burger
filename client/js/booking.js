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
import { addEventListener } from "./utilities/dom/addEventListener";

setAvailableDates(Date.now());
setAvailableTimes(day.value, restaurant.value);
setAvailableParty();

//edit form
addEventListener("#editBtn", (e) => {
	editForm(e);
	getAvailableParty(restaurant.value, day.value, time.value, id.value);
});

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

//booking CRUD
//get existing booking
findBookingfromURL();
addEventListener("#findBtn", (e) => findBookingfromForm(e));

// delete booking
addEventListener(
	"#deleteBtn",
	fetch(DELETE_BOOKING, { id: document.querySelector("#id").value })
);

//update booking
addEventListener(
	".putBookForm",
	(e) => handleSubmit(e, PUT_BOOKING, ".bookBtn"),
	"submit"
);
