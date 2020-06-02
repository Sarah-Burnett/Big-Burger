const availableDates = () => {
    const dateInput = document.querySelector('#date');
    const minDate = new Date(Date.now() + 86400000);
    const maxDate = new Date(Date.now() + 1296000000);
    dateInput.min = minDate.toISOString().split('T')[0];
    dateInput.max = maxDate.toISOString().split('T')[0];;
}

const availableTimes = (event) => {
    const timeInput = document.querySelector('#time');
    const hours = {
      "Mon": ["17:00", "21:00"],
      "Tues": ["17:00", "21:00"],
      "Wed": ["17:00", "21:00"],
      "Thurs": ["17:00", "21:00"],
      "Fri": ["17:00", "21:00"],
      "Sat": ["12:00", "21:00"],
      "Sat": ["17:00", "20:00"],
    }
    if (event.target.validity.valid) {
        const dayOfWeek = "" //get day of week from time
        timeInput.min = hours[dayofWeek][0];
        timeInput.max = hours[dayoffWeek][1];
    }
}

const selectBtns = () => {
    const selectBtn = (input, value) => document.querySelector(input).value = value;
    const closeDropdown = (dropdown) => document.querySelector('.dropdown-content').style.height = 0;
    const restaurantBtns = document.querySelectorAll(".restaurant .dropdown-content button");
    const partyBtns = document.querySelectorAll(".party .dropdown-content button");
    restaurantBtns.forEach(btn => btn.addEventListener('click', () => selectBtn("#restaurant", btn.dataset.value)));
    partyBtns.forEach(btn => btn.addEventListener('click', () => selectBtn("#party", btn.dataset.value)));
  }

export const bookForm = () => {
    availableDates();
    //document.querySelector('#date').addEventListener('onchange', availableTimes(event))
    selectBtns();
}