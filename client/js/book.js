import { minmaxDate } from './date';
import { checkError } from './validation';

const increment = (field, increment, max) => {
  let {value} = document.querySelector(field);
  if (value < max) document.querySelector(field).value = parseInt(value) + increment
}

const decrement = (field, decrement, min) => {
  let {value} = document.querySelector(field);
  if (value > min) document.querySelector(field).value = parseInt(value) - decrement
}

const add30mins = () => {
  const time = ["12:00", "12:30", "13:00", "13:30", "14:30", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]
  const index = time.indexOf(document.querySelector('#time').value)
  document.querySelector('#time').value = time[index + 1]
  console.log(time, index)
}

// party buttons
document.querySelector(".incPartyBtn").onclick = () => increment('#party', 1, 8)
document.querySelector(".decPartyBtn").onclick = () => decrement('#party', 1, 2)
document.querySelector(".incTimeBtn").onclick = () => add30mins()
document.querySelector(".decTimeBtn").onclick = () => decrement('#time', "00:30", "22:00")

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
minmaxDate();
submitForm();

