//time 
const hourBtns = document.querySelectorAll('#hour-selection span');
const timeBtns = document.querySelectorAll('#time-selection label');

const hours = [
  ["12:00", "12:30", "13:00", "13:30", "14:00"],
  ["14:00", "14:30", "15:00", "15:30", "16:00"],
  ["16:00", "16:30", "17:00", "17:30", "18:00"],
  ["18:00", "18:30", "19:00", "19:30", "20:00"],
  ["20:00", "20:30", "21:00", "21:30", "22:00"]
];

const changeTime = (item, index) => {
  item.addEventListener('click', () => {
    document.querySelector('#time-selection').style.display = "block";
    hourBtns.forEach( btn => btn.style.background = "white");
    hourBtns[index].style.background = "#36970F";
    timeBtns[0].innerHTML = hours[index][0];
    timeBtns[1].innerHTML = hours[index][1];
    timeBtns[2].innerHTML = hours[index][2];
    timeBtns[3].innerHTML = hours[index][3];
    timeBtns[4].innerHTML = hours[index][4];
/*
    for (let h = 0; h < hours[index].length; h++) {
      timeBtns[index].innerHTML = hours[index][h]; */
    })
  };

const changeColor = (item, index) => {
  item.addEventListener('click', () => {
    timeBtns.forEach ( btn => btn.style.background = "white");
    timeBtns[index].style.background = "green";
  });
}

  hourBtns.forEach(changeTime);
  timeBtns.forEach(changeColor);


//form submit
const bookForm = document.querySelector('#bookForm');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('#submit-message').style.opacity = 1;
});