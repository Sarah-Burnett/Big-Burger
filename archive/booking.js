import { getBooking } from './getBooking';
import { submitBooking } from './sendBooking';
import { bookingForm } from './book';

const findBtn = document.querySelector('#findBtn')
const editBtn = document.querySelector('#editBtn')
const updateBtn = document.querySelector('#updateBtn')
const deleteBtn = document.querySelector('#deleteBtn')

const findBooking = (event) => {
  event.preventDefault()
  getBooking(document.querySelector('#id').value)
  .then((response) => inputForm(response))
  .catch((error) => console.log(error))
}

const inputForm = (booking) => {
  booking = JSON.parse(booking)
  const inputs = document.querySelectorAll('input')
  inputs.forEach(input => {if (input.name !== "id") input.value = booking[input.name]})
  document.querySelector('.modalBg').classList.remove("modalActive")
}

const editForm = (event) => {
  const form = document.querySelector('#editForm')
  const inputs = document.querySelectorAll('input')
  event.preventDefault()
  inputs.forEach(input => {if (input.name !== "restaurant") input.readOnly = false})
  form.classList.remove('formDisabled')
  form.classList.add('formEditable')
}

const deleteBooking = (event) => {
  console.log("delete me bro")
  event.preventDefault()
  const xhr = new XMLHttpRequest
  xhr.open('DELETE', `${url}/${id}`, true) 
  xhr.onload = function(){
    if (this.status === 200) document.querySelector('.bookDeleted').classList.add("modalActive")
   else document.querySelector('.bookFail').classList.add("modalActive")
  }
  xhr.send()
}

const id = location.search.substr(1)
if (id !== "") {
  document.querySelector('#id').value = id
  getBooking(id)
    .then((response) => inputForm(response))
    .catch((error) => console.log(error))
}

findBtn.onclick = (event) => findBooking(event)
editBtn.onclick = (event) => editForm(event);
deleteBtn.onclick = (event) => deleteBooking(event);
updateBtn.onclick = (event) => submitForm(event);

//readonly form 
document.querySelectorAll(input).attr()
d3.selectAll(".readonlyInput").attr("readonly", true);

document.querySelector('form').addEventListener('submit', submitBooking('PUT'));

bookingForm();

