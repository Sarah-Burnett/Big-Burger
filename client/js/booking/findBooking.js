import axios from 'axios';
import { hideModal } from '../index/modal';

export const fillForm = (booking) => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {if (input.name !== "id") input.value = booking[input.name]});
  // hide modal 
  if (document.querySelector(".modal-active")) hideModal();
};

const getBooking = (id) => {
  axios.get(`/api/guest/booking/${id}`)
  .then(res => fillForm(res.data))
  .catch( err => console.log(err)) 
}

// auto find booking from url
const findBookingfromURL = () => {
  const id = location.search.substr(1);
  if (id !== "") {
    document.querySelector('#id').value = id;
    getBooking(id);
  }
}

// find booking from form submit
const findBookingfromForm = (event) => { 
  event.preventDefault();
  getBooking(document.querySelector('#id').value)
};


export const findBooking = () => {
  findBookingfromURL();
  document.querySelector('#findBtn').onclick = (event) => findBookingfromForm(event);
}


