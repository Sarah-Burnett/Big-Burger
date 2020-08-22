import { fetch } from "./fetch";
import { disableButton } from './utilities';
import { validateBooking } from "./validateBooking";
import { addSessionStorage } from "./storage";

export const setParams = () => {
	const form = document.querySelector("#bookForm");
	const name = form.elements["name"].value;
	const email = form.elements["email"].value;
	const restaurant = form.elements["restaurant"].value;
	const date = form.elements["date"].value;
	const time = form.elements["time"].value;
	const party = form.elements["party"].value;
	const message = form.elements["message"].value;
	return { name, email, restaurant, date, time, party, message };
};

export const handleSubmit = (e, type, button) => {
	e.preventDefault();
	disableButton(button);
	const params = setParams();
	addSessionStorage("booking", JSON.stringify(params));
	const err = validateBooking();
	if (!err) fetch(type, params);
};
