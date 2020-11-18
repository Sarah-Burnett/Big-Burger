const { createDate } = require("../../utilities/booking/createDate");

test("creates date object from dd/mm/yy string", () => {
	const date = createDate("20/12/1995");
	expect(typeof date).toBe("object");
	expect(date instanceof Date).toBe(true);
	expect(date.toISOString()).toEqual("1995-12-20T17:00:00.000Z");
});

test("create date object from date and time", () => {
	const date = createDate("20/02/2021", "20:00");
	expect(typeof date).toBe("object");
	expect(date instanceof Date).toBe(true);
	expect(date.toISOString()).toEqual("2021-02-20T20:00:00.000Z");
});
