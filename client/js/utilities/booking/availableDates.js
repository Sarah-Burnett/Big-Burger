export const getAvailableDates = (today) => {
	const minDate = new Date(today + 86400000);
	const maxDate = new Date(today + 1296000000);
	return { minDate, maxDate };
};

export const setAvailableDates = (today) => {
	const { minDate, maxDate } = getAvailableDates(today);
	const dateInput = document.querySelector("#date");
	dateInput.min = minDate.toISOString().split("T")[0];
	dateInput.max = maxDate.toISOString().split("T")[0];
};
