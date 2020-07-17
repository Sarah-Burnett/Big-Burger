import { prepareForm } from './prepareForm'
import { findBooking } from './findBooking';
import { editForm } from './editForm';
import { submitBooking } from './submitBooking';
import { deleteBooking } from './deleteBooking';

//preparing form and form Buttons
prepareForm();

//find existing booking
findBooking();

//edit form
document.querySelector('#editBtn').onclick = (event) => editForm(event);

//crud booking
document.querySelector('#deleteBtn').onclick = event => deleteBooking(document.querySelector('#id').value);
document.querySelector('#bookForm').onsubmit = event => submitBooking(event, 'PUT', `./api/guest/booking/${document.querySelector('#id').value}`);

