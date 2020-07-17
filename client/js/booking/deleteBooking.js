import axios from 'axios';

export const deleteBooking = (id) => {
    axios.delete(`./api/guest/booking/${id}`)
    .then( () => document.querySelector('.bookDeleted').classList.add("modal-active"))
    .catch( () =>  document.querySelector('.bookFail').classList.add("modal-active"))
}
  
