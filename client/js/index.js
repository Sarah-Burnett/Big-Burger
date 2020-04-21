"use strict";

// nav bar burger
const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");
function toggleNav() {
  nav.classList.toggle("nav-active");
}
burger.addEventListener('click', toggleNav);

// fixed nav bar
window.onscroll = () => {
  if (window.pageYOffset >= 10) {
     nav.classList.add("nav-fixed");
  }
  else {
    nav.classList.remove("nav-fixed")
  };
}

  
// smooth scroll 
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
  header: '[data-scroll-header]'
});

// update menu
import { menuContents } from './menu';
menuContents();

// review carousel
import { reviewCarousel } from './review';
reviewCarousel();

// location carousel
import { locationCarousel } from './location';
locationCarousel();

//modal
import { toggleModal } from './modal';
toggleModal();



