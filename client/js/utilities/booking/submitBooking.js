import { fetch } from "./fetch";
import { validateBooking } from "./validateBooking";
import { addSessionStorage } from "../storage/addSessionStorage";

export const setParams = () => {
	const form = document.querySelector("#bookForm");
	const name = form.elements["name"].value;
	const email = form.elements["email"].value;
	const restaurant = form.elements["restaurant"].value;
	const date = new Date(form.elements["date"].value);
	const time = form.elements["time"].value;
	const party = form.elements["party"].value;
	const message = form.elements["message"].value;
	return { name, email, restaurant, date, time, party, message };
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
