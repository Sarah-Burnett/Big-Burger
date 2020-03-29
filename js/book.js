const timeContainer = document.querySelector('#time-selection');
const hourContainer =  document.querySelector('#hour-selection')
const hourBtns = document.querySelectorAll('#hour-selection span');
const timeBtns = document.querySelectorAll('#time-selection label');
const timeRadio = document.querySelectorAll('#time-selection input[type="radio"]');
const partyBtns = document.querySelectorAll('.party label');
//set initial checked radio

//date "yyyy-mm-dd"
const dateInput = document.querySelector('#date');
let dateTodayplus1 = new Date(Date.now() + 86400000);
let dateFortnightplus1 = new Date(Date.now() + 1296000000);
dateInput.min = dateTodayplus1.toISOString().split('T')[0];
dateInput.max = dateFortnightplus1.toISOString().split('T')[0];;

// time 

const hours = [
  ["12:00", "12:30", "13:00", "13:30", "14:00"],
  ["14:00", "14:30", "15:00", "15:30", "16:00"],
  ["16:00", "16:30", "17:00", "17:30", "18:00"],
  ["18:00", "18:30", "19:00", "19:30", "20:00"],
  ["20:00", "20:30", "21:00", "21:30", "22:00"]
];

const changeTime = (item, index) => {
  item.addEventListener('click', () => {
    timeContainer.style.display = "block";
    hourContainer.style.display = "none";
    hourBtns.forEach( btn => btn.style.background = "#F5F5F5");
    hourBtns[index].style.background = "darkgreen";
    timeBtns[0].innerHTML = hours[index][0];
    timeRadio[0].value = hours[index][0];
    timeBtns[1].innerHTML = hours[index][1];
    timeRadio[1].value = hours[index][1];
    timeBtns[2].innerHTML = hours[index][2];
    timeRadio[2].value = hours[index][2];
    timeBtns[3].innerHTML = hours[index][3];
    timeRadio[3].value = hours[index][3];
    timeBtns[4].innerHTML = hours[index][4];
    timeRadio[4].value = hours[index][4];
    /*
    for (let h = 0; h < hours[index].length; h++) {
      timeBtns[index].innerHTML = hours[index][h]; */
    })
  };

const selectTime = (item, index) => {
  item.addEventListener('click', () => {
    timeBtns.forEach ( btn => btn.style.background = "#F5F5F5");
    timeBtns[index].style.background = "darkgreen";
  });
};

hourBtns.forEach(changeTime);
timeBtns.forEach(selectTime);

  //time back button
document.querySelector('#timebackBtn').addEventListener('click', () => {
  timeContainer.style.display = "none";
  hourContainer.style.display = "block";
});

// party selection
const selectParty = (item, index) => {
  item.addEventListener('click', () => {
    partyBtns.forEach ( btn => btn.style.background = "#F5F5F5");
    partyBtns[index].style.background = "darkgreen";
  });
};

partyBtns.forEach(selectParty);


//form submit
const bookForm = document.querySelector('#bookForm');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const date = document.querySelector('#date');
const time = document.querySelector('input[name="time"]');
const party = document.querySelector('input[name="party"]');
const formBoxes = document.querySelectorAll('#bookForm div')
const errorBoxes = document.querySelectorAll('.error');
console.log(formBoxes);

bookForm.addEventListener('submit', (e) => {  
    const error = checkError();
    if (error === 1) {
      e.preventDefault();
    }
    /*if (error === 0) {
    document.querySelector('.submit-message').style.opacity = 1;
    }*/
});


function checkError() {
  formBoxes.forEach( div => { 
    if (div.classList.contains('invalid')) {
      div.classList.remove('invalid')
    };
  });
  errorBoxes.forEach( p => {
    p.innerHTML = '';
    p.style.display = 'none';
  });
  let error = 0;
  if (!name.validity.valid) {
    error = 1;
    showError(0, 'Please enter your name');
  }
  if (!email.validity.valid) {
    error = 1;
    showError(1, 'Please enter your valid email address');
  } 
  if (!date.validity.valid) {
    error = 1;
    showError(2, `Please input a date (dd/mm/yy) between ${dateTodayplus1.getDate()}/${dateTodayplus1.getMonth() + 1}/${dateTodayplus1.getFullYear()} and ${dateFortnightplus1.getDate()}/${dateFortnightplus1.getMonth() + 1}/${dateFortnightplus1.getFullYear()}`);
  } 
  if (date.validity.valid) {
    // need to check invalid date has not been typed in! 
  }
  if (!time.validity.valid) {
    error = 1;
    showError(3, 'Please select the time you would like to book');
  } 
  if (!party.validity.valid) {
    error = 1;
    showError(4, 'Please select the number of people');
  }  
  return error;
}



function showError(index, msg) {
  let errorMsg = msg;
  errorBoxes[index].innerHTML = errorMsg;
  errorBoxes[index].style.display = 'block';
  formBoxes[index].classList.add('invalid');
  formBoxes[index].scrollIntoView();
}



