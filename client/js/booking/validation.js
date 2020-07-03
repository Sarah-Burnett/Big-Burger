const inputs = document.querySelectorAll('input');
const errorBoxes = document.querySelectorAll('.error');

export const checkError = () => {
    let error = false;
    inputs.forEach( (input, index) => {
      if (!input.validity.valid) {
        error = true; 
        errorBoxes[index].classList.add('errorActive');
        inputs[index].classList.add('inputInvalid');
        inputs[index].scrollIntoView();
        removeError(index);     
      }
    })
    return error;
}

  export const removeError = (index) => {
    inputs[index].oninput = () => {
      if (inputs[index].validity.valid) {
         inputs[index].classList.remove('inputInvalid');
        errorBoxes[index].classList.remove('errorActive');
      }
    }
}
  
  