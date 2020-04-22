import { navBar } from './navbar';
import { menuContents } from './menu';
import { reviewCarousel } from './review';
import { locationCarousel } from './location';
import { toggleModal } from './modal';

// smooth scroll 
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
  header: '[data-scroll-header]'
});

navBar();
menuContents();
reviewCarousel();
locationCarousel();
toggleModal();


