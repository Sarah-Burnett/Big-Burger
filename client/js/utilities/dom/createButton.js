export const createButton = (className) => {
	const newButton = document.createElement("button");
	newButton.classList.add(className);
	newButton.type = "button";
	return newButton;
};

export const createDropdownButton = () => createButton("dropdownBtn");
