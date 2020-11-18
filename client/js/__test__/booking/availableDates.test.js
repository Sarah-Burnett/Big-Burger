const {
	getAvailableDates,
	setAvailableDates,
} = require("../../utilities/booking/availableDates");
const { addDays, format } = require("date-fns");

const today = new Date(Date.now());

const html = `
	<select id="day"></select>
`;

const dates = getAvailableDates(today);

test("return correct list of dates", () => {
	expect(dates).toHaveLength(14);
	expect(dates[0]).not.toBe(today);
	expect(dates[13]).toEqual(addDays(today, 14));
});

test("add correct options to select", () => {
	document.body.innerHTML = html;
	setAvailableDates(today);
	expect(day.childNodes.length).toBe(14);
	day.childNodes.forEach((option, index) => {
		expect(option.value).toBe(format(dates[index], "dd/MM/yyyy"));
	});
});
