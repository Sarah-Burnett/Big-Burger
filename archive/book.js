import { minmaxDate } from './date';
import { checkError } from './validation';

//restaurant selector 
const checkRestaurant = () => {
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
const checkTime = () => {
  const timeContainer = document.querySelector('#time-selection');
  const hourContainer =  document.querySelector('#hour-selection')
  const hourBtns = document.querySelectorAll('#hour-selection span');
  const timeBtns = document.querySelectorAll('#time-selection label');
  const timeTxt = document.querySelectorAll('#time-selection label span');
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
      timeTxt[0].innerHTML = hours[index][0];
      timeRadio[0].value = hours[index][0];
      timeTxt[1].innerHTML = hours[index][1];
      timeRadio[1].value = hours[index][1];
      timeTxt[2].innerHTML = hours[index][2];
      timeRadio[2].value = hours[index][2];
      timeTxt[3].innerHTML = hours[index][3];
      timeRadio[3].value = hours[index][3];
      timeTxt[4].innerHTML = hours[index][4];
      timeRadio[4].value = hours[index][4];
      })
    };
  hourBtns.forEach(changeTime);
  timeBtns.forEach(selectTime);
 };

//time back button

const backTime = () => {
  const timeContainer = document.querySelector('#time-selection');
  const hourContainer =  document.querySelector('#hour-selection')   
  document.querySelector('#timebackBtn').addEventListener('click', () => {
    timeContainer.style.display = "none";
    hourContainer.style.display = "block";
  });
}


// party selection

const checkParty = () => {
  const partyBtns = document.querySelectorAll('.party label');
  const selectParty = (item, index) => {
    item.addEventListener('click', () => {
      partyBtns.forEach ( btn => btn.style.background = "#F5F5F5");
      partyBtns[index].style.background = "#205909";
    });
  };
  partyBtns.forEach(selectParty);
};


//form submit
const submitForm = () => {
  const bookForm = document.querySelector('#bookForm');
  const bookBtn = document.querySelector('#bookBtn');

  const postBooking = (url) => {    
    const form = document.querySelector('#bookForm');
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const restaurant = form.elements["restaurant"].value;
    const date = form.elements["date"].value;
    const time = form.elements["time"].value;
    const party = form.elements["party"].value;
    const message = form.elements["message"].value;
    const params = `form-name=booking&name=${name}&email=${email}&restaurant=${restaurant}&date=${date}&time=${time}&party=${party}&message=${message}`;
    return new Promise ((resolve, reject) => {
      const xhr = new XMLHttpRequest;
      xhr.open('POST', url, true);
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
      xhr.onload = function(){
        const {_id, date, time} = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve({message: "bookSuccess", id: _id})}
        else if (this.status === 403) {
          resolve({message: "bookFull", date, time})
        }
        else {reject({message: "bookFail"})}
      };
      xhr.onerror = function(){reject({message: "bookFail"})};
      xhr.send(params);
    })
};

  bookForm.addEventListener('submit', (e) => {  
      e.preventDefault();
      const error = checkError();
      if (error === 0) {
        bookBtn.value = "Sending...";
        bookBtn.disabled = true;
        postBooking('/api/bookings')
          .then((reply) => {
            const { message, id, date, time } = reply
            document.querySelector('#id').innerHTML = `<a href="booking.html?${id}">${id}</a>`
            document.querySelector('#date').innerHTML = date
            document.querySelector('#time').innerHTML = time
            document.querySelector(`.${message}`).classList.add("modalActive")
          })
          .catch(() => document.querySelector(".bookFail").classList.add("modalActive"))
        }
  });
}
  
//call functions
checkRestaurant();
minmaxDate();
checkTime();
backTime();
checkParty();
submitForm();

