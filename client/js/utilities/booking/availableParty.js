const { createDropdownButton } = require("../dom/createButton");

const getAvailableParty = (restaurant, date, time) => {
	//TODO:query db for availability
	return [2, 3, 4, 5, 6, 7, 8];
};

export const setAvailableParty = (restaurant, date, time) => {
	const sizes = getAvailableParty(restaurant, date, time);
	const dropdownContainer = document.querySelector('[data-dropdown="party"]');
	for (const size of sizes) {
		const newButton = createDropdownButton();
		newButton.innerText = size;
		newButton.dataset.input = "#party";
		newButton.dataset.value = size;
		dropdownContainer.append(newButton);
	}
};
