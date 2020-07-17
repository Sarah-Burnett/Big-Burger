import axios from 'axios';
import { validateBooking } from './validateBooking';
import { showModal } from '../index/modal';

const bookBtn = document.querySelector('.bookBtn');

const setParams = (urlencoding) => {
  const form = document.querySelector('#bookForm');
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const restaurant = form.elements["restaurant"].value;
  const date = form.elements["date"].value;
  const time = form.elements["time"].value;
  const party = form.elements["party"].value;
  const message = form.elements["message"].value;
  if (urlencoding) return  `name=${name}&email=${email}&restaurant=${restaurant}&date=${date}&time=${time}&party=${party}&message=${message}`
  else return { name, email, restaurant, date, time, party, message}
}

export const submitBooking = (event, method, url) => {
  event.preventDefault();
  const error = validateBooking();
  if (!error) {
    bookBtn.value = "Sending...";
    bookBtn.disabled = true;
    const params = setParams(true);
    axios({method, url, data: params})
    .then( res => {
      const { _id } = res.data;
      document.querySelector('#_id').innerHTML = `<a href="booking.html?${_id}">${_id}</a>`;
      showModal('.bookSuccess');
    })
    .catch( err => {
      const params = setParams(false);
      sessionStorage.setItem('booking', JSON.stringify(params))
      if (err.response.status === 409) {
        document.querySelector('.bookingDate').innerHTML = `<div><p>Date: <span>${err.response.data.date}</span></p><p>Time: <span>${err.response.data.time}</span></p></div>`;
        showModal('.bookFull');
      } else {
        showModal('.bookFail');
      }
    })
  }
}



