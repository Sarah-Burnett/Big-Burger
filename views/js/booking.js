const updateBtn = document.querySelector('#updateBtn')
const editBtn = document.querySelector('#editBtn')
const cancelBtn = document.querySelector('#cancelBtn')
const deleteBtn = document.querySelector('#deleteBtn')
const inputs = document.querySelectorAll('input')

const id = document.querySelector('.bookForm').dataset.id
console.log(id);

const editForm = (event) => {
  event.preventDefault();
  inputs.forEach(input => input.readOnly = false);
  cancelBtn.style.display = "block"
  updateBtn.style.display = "block"
  editBtn.style.display = "none"
  deleteBtn.style.display = "none"
}

const updateBooking = () => {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest;
        xhr.open('POST', '/booking', true);
        xhr.onload = function(){
          const {_id, name, email, restaurant, date, time, party, message} = JSON.parse(this.responseText);
          if (this.status === 200) {
            resolve(`Booking successful. <br> Your booking reference is <br><a href="./booking.html?id=${_id}">${_id}</a><br> Looking forward to seeing you soon`)}
          else {reject('No booking')}
        };
        xhr.onerror = function(){reject("Booking error. <br> Please try again or give us a call")};
        xhr.send(params);
      })
    }

const deleteBooking = (event) => {
  console.log("delete me bro")
  event.preventDefault()
  const xhr = new XMLHttpRequest
  xhr.open('DELETE', `/booking/${id}`, true) 
  xhr.onload = function(){
    console.log(this.responseText);
  }
  xhr.send()
}

const submitForm = (event) => {
  event.preventDefault();
  updateBooking()
}

editBtn.onclick = (event) => editForm(event);
deleteBtn.onclick = (event) => deleteBooking(event);
//updateBtn.onclick = (event) => submitForm(event);


//document.querySelector('form').onsubmit = checkError;