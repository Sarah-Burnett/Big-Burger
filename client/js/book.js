import { bookForm } from './bookForm'
import { submitBooking } from './sendBooking';

//preparing form and form Buttons
bookForm();

//send booking
document.querySelector('#bookForm').addEventListener('submit', submitBooking('POST', './api/guest/booking'))


