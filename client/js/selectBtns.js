export const selectBtns = () => {
    // party buttons
const selectParty = () => {
    const increment = (field, increment, max) => {
      let {value} = document.querySelector(field);
      if (value < max) document.querySelector(field).value = parseInt(value) + increment
    }
    
    const decrement = (field, decrement, min) => {
      let {value} = document.querySelector(field);
      if (value > min) document.querySelector(field).value = parseInt(value) - decrement
    }
    
    document.querySelector(".incPartyBtn").onclick = () => increment('#party', 1, 8)
    document.querySelector(".decPartyBtn").onclick = () => decrement('#party', 1, 2)
  }
  
  //time selection
  const selectTime = () => {
    const time = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"]
    const plus30 = () => {
      const index = time.indexOf(document.querySelector('#time').value)
      if (index < time.length-1) document.querySelector('#time').value = time[index + 1]
    }
    const minus30 = () => {
      const index = time.indexOf(document.querySelector('#time').value)
      if (index > 0) document.querySelector('#time').value = time[index - 1]
    }
    document.querySelector(".incTimeBtn").onclick = plus30
    document.querySelector(".decTimeBtn").onclick = minus30
  }
  
  //restaurant selection
  const selectRestaurant = () => {
    const rest = ["Glensgaich", "Tanyrisiau"]
    const inc = () => {
      const index = rest.indexOf(document.querySelector('#restaurant').value)
      if (index < rest.length-1) document.querySelector('#restaurant').value = rest[index + 1]
    }
    const dec = () => {
      const index = rest.indexOf(document.querySelector('#restaurant').value)
      if (index > 0) document.querySelector('#restaurant').value = rest[index - 1]
    }
    document.querySelector(".incRestBtn").onclick = inc
    document.querySelector(".decRestBtn").onclick = dec
  }

  selectRestaurant()
  selectTime()
  selectParty()
}