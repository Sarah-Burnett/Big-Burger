const restaurantBtns = document.querySelectorAll('.restaurant label');
const timeContainer = document.querySelector('#time-selection');
const hourContainer =  document.querySelector('#hour-selection')
const hourBtns = document.querySelectorAll('#hour-selection span');
const timeBtns = document.querySelectorAll('#time-selection label');
const timeRadio = document.querySelectorAll('#time-selection input[type="radio"]');
const partyBtns = document.querySelectorAll('.party label');

//restaurant selector
restaurantBtns[0].style.background = "darkgreen";
const selectRestaurant = (item, index) => {
  item.addEventListener('click', () => {
    restaurantBtns.forEach ( btn => btn.style.background = "#F5F5F5");
    restaurantBtns[index].style.background = "darkgreen";
  });
};
restaurantBtns.forEach(selectRestaurant);


//date "yyyy-mm-dd"
const dateInput = document.querySelector('#date');
let dateTodayplus1 = new Date(Date.now() + 86400000);
let dateFortnightplus1 = new Date(Date.now() + 1296000000);
dateInput.min = dateTodayplus1.toISOString().split('T')[0];
dateInput.max = dateFortnightplus1.toISOString().split('T')[0];;

// time selector
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
      timeBtns[index].innerHTML = hours[index][h];
      timeRadio[index].value = hours[index][h];
    */
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
import { checkError } from './validation';
const bookForm = document.querySelector('#bookForm');

bookForm.addEventListener('submit', (e) => {  
    e.preventDefault();
    const error = checkError();
    if (error === 0) {
    document.querySelector('.submit-message').style.opacity = 1;
    }
});


