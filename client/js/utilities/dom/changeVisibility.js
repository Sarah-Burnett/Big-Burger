export const hideElement = (elem) => {
	elem.style.opacity = "0";
	elem.style.pointerEvents = "none";
};

export const displayElement = (elem) => {
	elem.style.opacity = "1";
	elem.style.pointerEvents = "auto";
};
