import { fetch } from "./fetch";
import { validateBooking } from "./validateBooking";
import { addSessionStorage } from "../storage/addSessionStorage";

export const setParams = () => {
	const form = document.querySelector("#bookForm");
	//get values from form
	const name = form.elements["name"].value;
	const email = form.elements["email"].value;
	const restaurant = form.elements["restaurant"].value;
	const day = form.elements["day"].value;
	const time = form.elements["time"].value;
	const party = form.elements["party"].value;
	const message = form.elements["message"].value;
	//get date object from data attribute and set time
	let date = new Date(form.elements["day"].dataset.date);
	const mins = parseInt(time.substr(3, 5));
	const hrs = parseInt(time.substr(0, 2));
	date.setMinutes(mins, 0);
	date.setHours(hrs);
	date.toISOString;
	return { name, email, restaurant, day, date, time, party, message };
};

export const handleSubmit = (e, type, button) => {
	e.preventDefault();
	const params = setParams();
	console.log(params);
	addSessionStorage("booking", JSON.stringify(params));
	const err = validateBooking();
	if (!err) {
		document.querySelector(button).disabled = true;
		fetch(type, params);
	}
};
