const {
	getAvailableTimes,
	openingHours,
	setAvailableTimes,
} = require("../../utilities/booking/availableTimes");

const testDates = [
	{
		restaurant: "Glensgaich",
		date: new Date("2020-10-16"),
		day: "Fri",
	},
	{
		restaurant: "Glensgaich",
		date: new Date("2020-10-17"),
		day: "Sat",
	},
	{
		restaurant: "Glensgaich",
		date: new Date("2020-10-18"),
		day: "Sun",
	},
	{
		restaurant: "Tanygirisau",
		date: new Date("2020-10-16"),
		day: "Fri",
	},
	{
		restaurant: "Tanygirisau",
		date: new Date("2020-10-17"),
		day: "Sat",
	},
	{
		restaurant: "Tanygirisau",
		date: new Date("2020-10-18"),
		day: "Sun",
	},
];

test("receive correct opening hours", () => {
	for (let test of testDates) {
		const times = getAvailableTimes(test.date, test.restaurant);
		expect(times[0]).toBe(openingHours[test.restaurant][test.day][0]);
		expect(times[times.length - 1]).toBe(
			openingHours[test.restaurant][test.day][1]
		);
		for (let time of times) {
			expect(time).toMatch(/^[0-2][0-9]:[03][0]$/);
		}
	}
});

test("appends time buttons", () => {
	document.body.innerHTML = '<div data-dropdown="time"/>';
	const { date, restaurant } = testDates[0];
	const times = setAvailableTimes(date, restaurant);
	const btns = document.querySelectorAll(".dropdownBtn");
	expect(btns).toHaveLength(times.length);
	btns.forEach((btn, index) => {
		expect(btn.innerText).toBe(times[index]);
		expect(btn.dataset.input).toBe("#time");
		expect(btn.dataset.value).toBe(times[index]);
	});
});
