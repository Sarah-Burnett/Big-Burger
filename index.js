// update menu container on button click

const menuJSON = require('/menu.json');
const menuContainer = document.querySelector(".menu-container");

document.querySelector("#button-starter").addEventListener('click', () => {updateMenu(0)}); 
document.querySelector("#button-burger").addEventListener('click', () => {updateMenu(2)}); 
document.querySelector("#button-sides").addEventListener('click', () => {updateMenu(1)}); 
document.querySelector("#button-pudding").addEventListener('click', () => {updateMenu(3)}); 

function updateMenu(index) {
  menuContainer.style.opacity = 0;
  let {menu, intro, items} = menuJSON[index];
  let output = "";
  output += `
    <h3>${menu}</h3>
    <p class="menu-description">${intro}</p>
    <div class="menu-list">
    `;
  for (i in items) {
    output += `
    <div class="menu-item">
      <h4>${items[i].title}</h4>
      <span>${items[i].ingredients}</span>
      <div>${items[i].price}</div>
    </div>
    `
  }
  menuContainer.innerHTML = output;
  menuContainer.style.opacity = 1;
};

//0 = starter; 1 = sides; 2= burger; 3=pudding

// nav bar burger
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
function toggleNav() {
  nav.classList.toggle("nav-active");
}
burger.addEventListener('click', toggleNav);

// update menu content
//import updateMenu from './js/menu';
//console.log(updateMenu());
//updateMenu();

//form submit
const messageForm = document.querySelector('#messageForm');
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("ms");
  document.querySelector('#sent').style.opacity = 1;
});

// fixed nav bar
window.onscroll = () => {
if (window.pageYOffset >= 2) {
    nav.classList.add("nav-fixed");
    console.log("nav-fixed");
}
else {nav.classList.remove("nav-fixed")};
}


// smooth scroll 
const home = document.querySelector("#home-title");
const aboutBtn = document.querySelector("#aboutBtn");
const about = document.querySelector("#about-title");


// review carousels

let reviewCounter = 0;
const reviewItems = document.querySelectorAll(".review-item");
const reviewDots = document.querySelectorAll(".review-dot");

function autoReview() {
  reviewDots.forEach( dot => {
      dot.style.background = "#36970F";
    });
  reviewItems.forEach ( review => {
    review.style.opacity = "0";
  });
  reviewDots[reviewCounter].style.background = "darkgreen";
  reviewItems[reviewCounter].style.opacity = "1";
  if (reviewCounter === reviewItems.length -1 ) return reviewCounter = 0;
  reviewCounter ++;
};

const reviewInterval = () => setInterval(autoReview, 3000);
reviewInterval();

const clickReview = (item, index) => {
  clearInterval(reviewInterval);
  item.addEventListener('click', () => {
    reviewDots.forEach( dot => dot.style.background = "#36970F");
    reviewItems.forEach (item => item.style.opacity = "0");
    reviewDots[index].style.background = "darkgreen";
    reviewItems[index].style.opacity = "1";
    reviewInterval();
})};

reviewDots.forEach(clickReview);

// location 
const locationItems = document.querySelectorAll(".location-item");
const locationDots = document.querySelectorAll(".location-dot");
const dot1 = locationDots[0]; const dot2 = locationDots[1];

const changeLocation = (item, index) => {
 item.addEventListener('click', () => {
  locationDots.forEach( dot => dot.style.background = "#36970F");
  locationItems.forEach (item => item.style.opacity = "0");
  locationDots[index].style.background = "darkgreen";
  locationItems[index].style.opacity = "1";
  })};

locationDots.forEach(changeLocation);



/*
function changeLocation(index) {
  locationDots.forEach( dot => dot.style.background = "#36970F");
  locationItems.forEach (item => item.style.opacity = "0");
  locationDots[index].style.background = "darkgreen";
  locationItems[index].style.opacity = "1";
 };

dot1.addEventListener('click', () => changeLocation(0));
dot2.addEventListener('click', () => changeLocation(1));

*/
// location modal - so have it open on maps for mobile devices but modal on screens

//window.matchMedia();

// menu 


/* can't do AJAX as local file without node which not doing for this!
const xhr = new XMLHttpRequest;
xhr.open('GET', '/menuapi.json', true);
xhr.onload = function(){
  if (this.status === 200){
    //const menu = JSON.parse(this.responseText);
    console.log(this.responseText);
  };
};
xhr.send();
*/

// map modal 

const mapBtnG = document.querySelector(".glensgaich-btn");
const mapBtnT = document.querySelector(".tanygrisiau-btn");
const modal = document.querySelector(".modal-bg");

function showModal(contents) {
  //show modal
  modal.classList.remove("modal-inactive");
  modal.classList.add("modal-active");
  // display required content
  document.querySelector(contents).style.display = "block";
};

function hideModal() {
  modal.classList.remove("modal-active");
  document.querySelector("#glensgaich-map").style.display = "none";
  document.querySelector("#tanygrisiau-map").style.display = "none";
}


mapBtnG.addEventListener('mouseover', () => {showModal("#glensgaich-map")});
mapBtnT.addEventListener('mouseover', () => {showModal("#tanygrisiau-map")});

document.querySelector(".modal-close").addEventListener('click', hideModal);

hideModal();