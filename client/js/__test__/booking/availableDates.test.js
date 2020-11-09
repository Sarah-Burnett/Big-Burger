import { format } from "date-fns";
import {
	getAvailableDates,
	setAvailableDates,
} from "../../utilities/booking/availableDates";

const testDate = new Date("2020-10-01");
const expectedDates = [
	new Date("2020-10-02"),
	new Date("2020-10-03"),
	new Date("2020-10-04"),
	new Date("2020-10-05"),
	new Date("2020-10-06"),
	new Date("2020-10-07"),
	new Date("2020-10-08"),
	new Date("2020-10-09"),
	new Date("2020-10-10"),
	new Date("2020-10-11"),
	new Date("2020-10-12"),
	new Date("2020-10-13"),
	new Date("2020-10-14"),
	new Date("2020-10-15"),
];

test("array of dates in next fortnight", () => {
	const dates = getAvailableDates(testDate);
	expect(dates).not.toContain(testDate);
	for (let date of expectedDates) {
		expect(dates).toContainEqual(date);
	}
});

test("appends date buttons", () => {
	document.body.innerHTML = '<input id="day"/><div data-dropdown="day"/>';
	setAvailableDates(testDate);
	const btns = document.querySelectorAll(".dropdownBtn");
	expect(btns).toHaveLength(14);
	btns.forEach((btn, index) => {
		expect(btn.dataset.value).toBe(format(expectedDates[index], "dd/MM/yyyy"));
	});
});
