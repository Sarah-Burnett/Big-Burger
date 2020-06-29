import { bookForm } from './bookForm'
import { getBooking } from './getBooking';
import { submitBooking } from './sendBooking';

//preparing form and form Buttons
bookForm();

//find existing booking
const findBtn = document.querySelector('#findBtn');

const inputForm = (booking) => {
  booking = JSON.parse(booking);
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {if (input.name !== "id") input.value = booking[input.name]});
  document.querySelector('.modalBg').classList.remove("modalActive");
};

const findBooking = (event) => {
  event.preventDefault();
  getBooking(document.querySelector('#id').value)
  .then((response) => {
    inputForm(response);
    document.querySelector(".modal-active").classList.remove("modal-active");
    })
  .catch((error) => console.log(error))
};

const id = location.search.substr(1);
if (id !== "") {
  document.querySelector('#id').value = id;
  getBooking(id)
    .then((response) => {
      inputForm(response);
      document.querySelector(".modal-active").classList.remove("modal-active");
      })
    .catch((error) => console.log(error))
};


findBtn.onclick = (event) => findBooking(event);

//crud booking buttons
const editBtn = document.querySelector('#editBtn');
const updateBtn = document.querySelector('#updateBtn');
const deleteBtn = document.querySelector('#deleteBtn');

const editForm = (event) => {
  const form = document.querySelector('#bookForm');
  const inputs = document.querySelectorAll('input');
  event.preventDefault();
  inputs.forEach(input => {if (input.name !== "restaurant") input.readOnly = false});
  form.classList.remove('formDisabled');
  form.classList.add('formEditable');
};

const deleteBooking = (event) => {
  console.log("delete me bro");
  event.preventDefault();
  const xhr = new XMLHttpRequest;
  xhr.open('DELETE', `./api/guest/booking/${id}`, true) ;
  xhr.onload = function(){
    if (this.status === 200) document.querySelector('.bookDeleted').classList.add("modal-active")
   else document.querySelector('.bookFail').classList.add("modal-active")
  };
  xhr.send();
};

editBtn.onclick = (event) => editForm(event);
deleteBtn.onclick = (event) => deleteBooking(event);
updateBtn.onclick = (event) => submitBooking('PUT', `./api/guest/booking/${document.querySelector('#id').value}`);

