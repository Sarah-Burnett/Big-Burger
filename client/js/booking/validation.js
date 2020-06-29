const inputs = document.querySelectorAll('input');
const errorBoxes = document.querySelectorAll('.error');

export const checkError = () => {
    let error = false;
    inputs.forEach( (input, index) => {
      if (!input.validity.valid) {
        error = true; 
        errorBoxes[index].style.display = 'block';
        inputs[index].classList.add('invalid');
        inputs[index].scrollIntoView();
        removeError(index);     
      }
    })
    return error;
}

  export const removeError = (index) => {
    inputs[index].oninput = () => {
      if (inputs[index].validity.valid) {
         inputs[index].classList.remove('invalid');
        errorBoxes[index].style.display = 'none';
      }
    }
}
  
  