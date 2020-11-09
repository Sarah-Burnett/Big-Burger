//typeof btn is node
export const changeInputValue = (btn) => {
	document.querySelector(btn.dataset.input).value = btn.dataset.value;
	document.activeElement.blur();
};

export const clickEventChangesInputValue = (btn) => {
	console.log("hi");
	addEventListener(btn, changeInputValue);
};
