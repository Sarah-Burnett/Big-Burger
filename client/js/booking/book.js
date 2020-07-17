import { prepareForm } from './prepareForm';
import { submitBooking } from './submitBooking';

//preparing form and form Buttons
prepareForm();

//create booking
document.querySelector('#bookForm').onsubmit = event => submitBooking(event, 'POST', './api/guest/booking')