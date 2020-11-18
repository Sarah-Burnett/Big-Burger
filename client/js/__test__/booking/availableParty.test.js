const { setAvailableParty } = require("../../utilities/booking/availableParty");

const html = `
    <select id="party">
    </select>
`;

const allSizes = [2, 3, 4, 5, 6, 7, 8];
const availSizes = [2, 3, 4, 5, 6];

test("add correct options to select", () => {
	document.body.innerHTML = html;
	setAvailableParty(availSizes);
	expect(party.childNodes.length).toBe(8);
	console.log(party.childNodes[0]);
	party.childNodes.forEach((option, index) => {
		expect(option.value).toBe(allSizes[index].toString());
		if (index > 4) {
			expect(option.disabled).toBe(true);
		} else expect(option.disabled).toBe(false);
	});
});

//TODO: [BB-10] setavailableparty appending text elements