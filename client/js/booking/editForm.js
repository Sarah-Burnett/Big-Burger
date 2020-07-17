const h2 = document.querySelector('#bookingForm h2');
const form = document.querySelector('#bookForm');
const inputs = document.querySelectorAll('input');

export const editForm = (event) => {
  event.preventDefault();
  inputs.forEach(input => {if (input.name !== "restaurant") input.readOnly = false});
  form.classList.remove('formDisabled');
  form.classList.add('formEditable');
  h2.innerHTML = "Edit your booking";
  h2.scrollIntoView({behavior: "smooth"});
};