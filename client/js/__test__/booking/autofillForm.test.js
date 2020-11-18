const { autoFillForm } = require("../../utilities/booking/autofillForm");
const util = require("util");

const exampleDay = "20/12/2020";
const exampleTime = "17:00";

const html = `
	<input id="name"/>
	<input id="email"/>
	<select id="day" name="day">
		<option value=${exampleDay}></option>
	</select>
	<select id="time" name="time">
		<option value=${exampleTime}></option>
	</select>
`;

const data = {
	name: "Sarah",
	email: "sarah@gmail.com",
	day: exampleDay,
	time: exampleTime,
};

test("correctly fills form", () => {
	document.body.innerHTML = html;
	autoFillForm(data);
	expect(document.querySelector("#name").value).toBe(data.name);
	expect(document.querySelector("#email").value).toBe(data.email);
	expect(document.querySelector("#day").value).toBe(data.day);
	expect(document.querySelector("#time").value).toBe(data.time);
});





