export const handleSelectBtns = () => {
    const selectBtn = (input, value) => document.querySelector(input).value = value;
    const restaurantBtns = document.querySelectorAll(".restaurant .dropdownContent button");
    const partyBtns = document.querySelectorAll(".party .dropdownContent button");
    const timeBtns = document.querySelectorAll(".time .dropdownContent button");
    restaurantBtns.forEach(btn => btn.addEventListener('click', () => selectBtn("#restaurant", btn.dataset.value)));
    partyBtns.forEach(btn => btn.addEventListener('click', () => selectBtn("#party", btn.dataset.value)));
    timeBtns.forEach(btn => btn.addEventListener('click', () => selectBtn("#time", btn.dataset.value)));
  }


