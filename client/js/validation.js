const name = document.querySelector('#name');
const email = document.querySelector('#email');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const party = document.querySelector('#party');
const formBoxes = document.querySelectorAll('#bookForm div');
const inputs = document.querySelectorAll('input');
const errorBoxes = document.querySelectorAll('.error');

export const checkError = () => {
    inputs.forEach( input => { 
        if (input.classList.contains('invalid')) {
          input.classList.remove('invalid')
        };
      });
    console.log(time.validity);
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
        showError(4, 'Booking slots are available every 30 minutes during our opening hours. Please select the time you would like to book');
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
    inputs[index].classList.add('.invalid');
    inputs[index].scrollIntoView();
  }
  
  