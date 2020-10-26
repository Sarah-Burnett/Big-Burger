const { setAvailableParty } = require("../../utilities/booking/availableParty");

const sizes = [2, 3, 4, 5, 6, 7, 8];
test("appends party buttons", () => {
	document.body.innerHTML = '<div data-dropdown="party"/>';
	setAvailableParty(sizes);
	const btns = document.querySelectorAll(".dropdownBtn");
	expect(btns).toHaveLength(7);
	btns.forEach((btn, index) => {
		expect(btn.innerText).toBe(sizes[index]);
		expect(btn.dataset.input).toBe("#party");
		expect(parseInt(btn.dataset.value)).toBe(sizes[index]);
	});
});
