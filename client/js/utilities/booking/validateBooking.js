import { addClassList, removeClassList } from "../dom/toggleClassList";

const inputs = document.querySelectorAll('input');
const errorBoxes = document.querySelectorAll('.error');

export const showError = (index) => {
	addClassList(errorBoxes[index], "errorActive");
  addClassList(inputs[index], "inputInvalid");
  inputs[index].scrollIntoView();
};

export const removeError = (index) => {
  inputs[index].oninput = () => {
    if (inputs[index].validity.valid) {
      removeClassList(inputs[index], 'inputInvalid');
      removeClassList(errorBoxes[index], 'errorActive');
    }
  }
}

export const validateBooking = () => {
    let error = false;
    inputs.forEach( (input, index) => {
      if (!input.validity.valid) {
        error = true; 
        showError(index);
        removeError(index);     
      }
    })
    return error;
}  
  