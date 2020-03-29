const dateInput = document.querySelector('#date');
export let dateTodayplus1 = new Date(Date.now() + 86400000);
export let dateFortnightplus1 = new Date(Date.now() + 1296000000);

export function minmaxDate() {
    dateInput.min = dateTodayplus1.toISOString().split('T')[0];
    dateInput.max = dateFortnightplus1.toISOString().split('T')[0];;
};



