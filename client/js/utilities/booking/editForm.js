const h2 = document.querySelector('#bookingForm h2');
const inputs = document.querySelectorAll('input');

export const editForm = (e) => {
  e.preventDefault();
  inputs.forEach(input => {if (input.name !== "restaurant") input.readOnly = false});
  bookForm.classList.remove('formDisabled');
  bookForm.classList.add('formEditable');
  h2.innerHTML = "Edit your booking";
  h2.scrollIntoView({behavior: "smooth"});
};