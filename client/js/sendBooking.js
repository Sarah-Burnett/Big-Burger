import { checkError } from './validation';

const setParams = () => {
  const form = document.querySelector('#bookForm');
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const restaurant = form.elements["restaurant"].value;
  const date = form.elements["date"].value;
  const time = form.elements["time"].value;
  const party = form.elements["party"].value;
  const message = form.elements["message"].value;
  return `name=${name}&email=${email}&restaurant=${restaurant}&date=${date}&time=${time}&party=${party}&message=${message}`
}

const sendBooking = (method, url) => {
  const params = setParams();
  console.log(params);
  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest;
    xhr.open(method, url, true);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function(){
      if (this.status === 200) {
        const {_id} = JSON.parse(this.responseText);
        resolve({message: "bookSuccess", id: _id})}
      else if (this.status === 403) {
        const {date, time} = JSON.parse(this.responseText);
        resolve({message: "bookFull", date, time})
      }
      else {reject({message: "bookFail"})}
    };
    xhr.onerror = function(){reject({message: "bookFail"})};
    xhr.send(params);
  })
}

export const submitBooking = (method, url) => {
  const bookBtn = document.querySelector('.bookBtn');
  document.querySelector('#bookForm').addEventListener('submit', (e) => {  
      e.preventDefault();
      const error = checkError();
      if (!error) {
        bookBtn.value = "Sending...";
        bookBtn.disabled = true;
        sendBooking(method, url)
          .then((reply) => {
            let { message, id, date, time } = reply;
            if (document.querySelector('#id')) id = document.querySelector('#id').value;
            document.querySelector('#_id').innerHTML = `<a href="booking.html?${id}">${id}</a>`
            document.querySelector('#date').innerHTML = date
            document.querySelector('#time').innerHTML = time
            document.querySelector(`.${message}`).classList.add("modal-active")
          })
          .catch(() => document.querySelector(".bookFail").classList.add("modal-active"))
      }
  });
}

