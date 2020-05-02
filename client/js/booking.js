const findBtn = document.querySelector('#findBtn')
const editBtn = document.querySelector('#editBtn')
const updateBtn = document.querySelector('#updateBtn')
const deleteBtn = document.querySelector('#deleteBtn')

const getBooking = (id) => {
  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest
    xhr.open('GET', `/api/bookings/${id}`, true)
    xhr.onload = function(){
      if (this.status === 200) resolve(this.responseText)
      else reject({error: "no booking found"})
    }
    xhr.send()
  })
}

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
  const inputs = document.querySelectorAll('input')
  event.preventDefault()
  inputs.forEach(input => input.readOnly = false)
  cancelBtn.style.display = "block"
  updateBtn.style.display = "block"
  editBtn.style.display = "none"
  deleteBtn.style.display = "none"
}

const updateBooking = () => {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest;
        xhr.open('POST', '/api/bookings', true);
        xhr.onload = function(){
          const {_id, name, email, restaurant, date, time, party, message} = JSON.parse(this.responseText);
          if (this.status === 200) {
            resolve({message: "bookSuccess", id:_id})}
          else {reject({message: "bookFail"})}
        };
        xhr.onerror = function(){reject("Booking error. <br> Please try again or give us a call")};
        xhr.send(params);
      })
    }

const deleteBooking = (event) => {
  console.log("delete me bro")
  event.preventDefault()
  const xhr = new XMLHttpRequest
  xhr.open('DELETE', `/api/bookings/${id}`, true) 
  xhr.onload = function(){
    console.log(this.responseText);
  }
  xhr.send()
}

const submitForm = (event) => {
  event.preventDefault();
  updateBooking()
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
//updateBtn.onclick = (event) => submitForm(event);


//document.querySelector('form').onsubmit = checkError;