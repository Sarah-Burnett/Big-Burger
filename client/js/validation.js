const name = document.querySelector('#name');
const email = document.querySelector('#email');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const party = document.querySelector('#party');
const formBoxes = document.querySelectorAll('#bookForm div');
const inputs = document.querySelectorAll('input');
const errorBoxes = document.querySelectorAll('.error');

export const checkError = () => {
    formBoxes.forEach( div => { 
      if (div.classList.contains('invalid')) {
        div.classList.remove('invalid')
      };
    });
    inputs.forEach( input => { 
        if (input.classList.contains('invalid')) {
          input.classList.remove('invalid')
        };
      });
    errorBoxes.forEach( p => {
      p.innerHTML = '';
      p.style.display = 'none';
    });
    let error = false;
    if (!party.validity.valid) {
      error = true;
      showError(5, 'Please select the number of people between 2-8');
    }  
    if (!time.validity.valid) {
        error = true;
        showError(4, 'Please select the time you would like to book');
      }
    if (!date.validity.valid) {
        error = true;
        showError(3, `Please select a date (dd/mm/yy) in the next two weeks`);
      } 
    if (!email.validity.valid) {
        error = true;
        showError(1, 'Please enter your valid email address');
      } 
    if (!name.validity.valid) {
        error = true;
        showError(0, 'Please enter your name');
      }
    return error;
  }
  
  export const showError = (index, msg) => {
    let errorMsg = msg;
    errorBoxes[index].innerHTML = errorMsg;
    errorBoxes[index].style.display = 'block';
    if (index == 0) {
        document.querySelector('#name').classList.add('invalid');
    }
    if (index == 1) {
        document.querySelector('#email').classList.add('invalid');
    }
    if (index == 3) {
        document.querySelector('#date').classList.add('invalid');
    }
    formBoxes[index].scrollIntoView();
  }
  
  