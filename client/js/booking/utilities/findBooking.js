// import axios from 'axios';
import { fetch } from './fetch';
import { GET_BOOKING } from './types';

// auto find booking from url
export const findBookingfromURL = () => {
  const id = location.search.substr(1);
  if (id !== "") {
    document.querySelector('#id').value = id;
  }
  fetch(GET_BOOKING, { id });
}

// find booking from form submit
export const findBookingfromForm = (event) => { 
  event.preventDefault();
  const id = document.querySelector('#id').value;
  // getBooking(document.querySelector('#id').value)
  fetch(GET_BOOKING, { id });
};


