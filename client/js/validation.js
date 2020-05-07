import { dateFortnightplus1, dateTodayplus1 } from './date';

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
    let error = 0;
    if (!party.validity.valid) {
      error = 1;
      showError(5, 'Please select the number of people');
    }  
    if (!time.validity.valid) {
        error = 1;
        showError(4, 'Please select the time you would like to book');
      }
    if (!date.validity.valid) {
        error = 1;
        showError(3, `Please input a date (dd/mm/yy) between ${dateTodayplus1.getDate()}/${dateTodayplus1.getMonth() + 1}/${dateTodayplus1.getFullYear()} and ${dateFortnightplus1.getDate()}/${dateFortnightplus1.getMonth() + 1}/${dateFortnightplus1.getFullYear()}`);
      } 
    if (!email.validity.valid) {
        error = 1;
        showError(1, 'Please enter your valid email address');
      } 
    if (!name.validity.valid) {
        error = 1;
        showError(0, 'Please enter your name');
      }
    return error;
  }
  
  const showError = (index, msg) => {
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
  
  