export const postForm = (url) => {    
    const form = document.querySelector('#bookForm');
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const restaurant = form.elements["restaurant"].value;
    const date = form.elements["date"].value;
    const time = form.elements["time"].value;
    const party = form.elements["party"].value;
    const message = form.elements["message"].value;
    const params = `form-name=booking&name=${name}&email=${email}&restaurant=${restaurant}&date=${date}&time=${time}&party=${party}&message=${message}`;
    return new Promise ((resolve, reject) => {
      const xhr = new XMLHttpRequest;
      xhr.open('POST', url, true);
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
      xhr.onload = function(){
        const {_id, date, time} = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve(`Booking successful. <br> Your booking reference is <br><a href="./booking.html?id=${_id}">${_id}</a><br> Looking forward to seeing you soon`)}
        else if (this.status === 403) {
          resolve(`Booking full at your selected time and date.<br>Date: ${date}<br>Time: ${time}<br> Please update booking for a different time`)
        }
        else {reject('Booking error. <br> Please try again or give us a call')}
      };
      xhr.onerror = function(){reject("Booking error. <br> Please try again or give us a call")};
      xhr.send(params);
    })
};