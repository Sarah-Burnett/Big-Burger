import { checkError } from '../../client/js/validation'

const updateBtn = document.querySelector('#updateBtn')
const deleteBtn = document.querySelector('#deleteBtn')

const Booking = (method, url) => {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest;
        xhr.open(method, url, true);
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

deleteBtn.onclick = 

document.querySelector('form').onsubmit = checkError;