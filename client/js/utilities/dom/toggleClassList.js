export const addClassList = (elem, className) => {
	typeof elem === "string"
		? document.querySelector(elem).classList.add(className)
		: elem.classList.add(className);
};

export const removeClassList = (elem, className) => {
	typeof elem === "string"
		? document.querySelector(elem).classList.remove(className)
		: elem.classList.remove(className);
};

export const toggleClassList = (elem, className) => {
	typeof elem === "string"
		? document.querySelector(elem).classList.toggle(className)
		: elem.classList.remove(className);
};
