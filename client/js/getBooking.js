export const getBooking = (id) => {
    return new Promise ((resolve, reject) => {
      const xhr = new XMLHttpRequest
      xhr.open('GET', `/api/guest/booking/${id}`, true)
      xhr.onload = function(){
        if (this.status === 200) resolve(this.responseText)
        else reject({error: "no booking found"})
      }
      xhr.send()
    })
  }