import { minmaxDate } from './date';
import { checkError } from './validation';

checkRestaurant();
minmaxDate();
checkTime();
backTime();
checkParty();
submitForm();

//restaurant selector 
function checkRestaurant() {
  const restaurantBtns = document.querySelectorAll('.restaurant label');

  restaurantBtns[0].style.background = "#205909";
  const selectRestaurant = (item, index) => {
    item.addEventListener('click', () => {
      restaurantBtns.forEach ( btn => btn.style.background = "#F5F5F5");
      restaurantBtns[index].style.background = "#205909";
    });
  };
  restaurantBtns.forEach(selectRestaurant);
}

// time selector
function checkTime() {
  const timeContainer = document.querySelector('#time-selection');
  const hourContainer =  document.querySelector('#hour-selection')
  const hourBtns = document.querySelectorAll('#hour-selection span');
  const timeBtns = document.querySelectorAll('#time-selection label');
  const timeRadio = document.querySelectorAll('#time-selection input[type="radio"]');
  
  const hours = [
    ["12:00", "12:30", "13:00", "13:30", "14:00"],
    ["14:00", "14:30", "15:00", "15:30", "16:00"],
    ["16:00", "16:30", "17:00", "17:30", "18:00"],
    ["18:00", "18:30", "19:00", "19:30", "20:00"],
    ["20:00", "20:30", "21:00", "21:30", "22:00"]
  ];

  const selectTime = (item, index) => {
    item.addEventListener('click', () => {
      timeBtns.forEach ( btn => btn.style.background = "#F5F5F5");
      timeBtns[index].style.background = "#205909";
    });
  };


  const changeTime = (item, index) => {
    item.addEventListener('click', () => {
      timeContainer.style.display = "block";
      hourContainer.style.display = "none";
      hourBtns.forEach( btn => btn.style.background = "#F5F5F5");
      hourBtns[index].style.background = "#205909";
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
      })
    };
  hourBtns.forEach(changeTime);
  timeBtns.forEach(selectTime);
 };

//time back button

function backTime() {
  const timeContainer = document.querySelector('#time-selection');
  const hourContainer =  document.querySelector('#hour-selection')   
  document.querySelector('#timebackBtn').addEventListener('click', () => {
    timeContainer.style.display = "none";
    hourContainer.style.display = "block";
  });
}


// party selection

function checkParty() {
  const partyBtns = document.querySelectorAll('.party label');

  const selectParty = (item, index) => {
    item.addEventListener('click', () => {
      partyBtns.forEach ( btn => btn.style.background = "#F5F5F5");
      partyBtns[index].style.background = "205909";
    });
  };

  partyBtns.forEach(selectParty);
};


//form submit
function submitForm() {
  const bookForm = document.querySelector('#bookForm');

  bookForm.addEventListener('submit', (e) => {  
      const error = checkError();
      if (error === 0) {
      document.querySelector('.submit-message').style.opacity = 1;
      } else {    
        e.preventDefault();
      };
  });
}



