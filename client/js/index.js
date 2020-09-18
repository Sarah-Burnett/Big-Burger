import { updateActiveDot } from "./utilities/dom/updateActiveDot";
import { addEventListener } from "./utilities/dom/addEventListener";
import { showModal, hideModal } from "./utilities/dom/toggleModal";
import { updateMenu } from "./utilities/dom/updateMenu";
import { forEach } from "./utilities/dom/forEach";
import {
	addClassList,
	removeClassList,
	toggleClassList,
} from "./utilities/dom/toggleClassList";

//nav bar - fixed on scroll & mob nav
window.onscroll = () => {
	window.pageYOffset >= 10
		? addClassList("nav", "nav-fixed")
		: removeClassList("nav", "nav-fixed");
};
addEventListener(".burger", () => toggleClassList("nav", "nav-active"));

// smooth scroll
new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true,
	header: "[data-scroll-header]",
});

//update menu contents
addEventListener("#button-starter", () => updateMenu(0));
addEventListener("#button-sides", () => updateMenu(1));
addEventListener("#button-burger", () => updateMenu(2));
addEventListener("#button-pudding", () => updateMenu(3));

//review carousel
let reviewCounter = 0;
let reviewInterval;
const reviewItems = document.querySelectorAll(".review-item");
const reviewDots = document.querySelectorAll(".review-dot");
const updateReviewDot = (index) => {
	updateActiveDot(reviewDots, reviewItems, index);
};
//auto update review
const autoUpdateReview = () => {
	updateReviewDot(reviewCounter);
	return reviewCounter < reviewItems.length - 1
		? reviewCounter++
		: (reviewCounter = 0);
};
const setReviewInterval = () => {
	reviewInterval = setInterval(autoUpdateReview, 3000);
};
setReviewInterval();
//manually click to update review
const manualUpdateReview = (index) => {
	clearInterval(reviewInterval);
	updateReviewDot(index);
	reviewCounter = index;
	setReviewInterval();
};
reviewDots.forEach((dot, index) => {
	addEventListener(dot, () => manualUpdateReview(index));
});

//location carousel
const locationItems = document.querySelectorAll(".location-item");
const locationDots = document.querySelectorAll(".location-dot");
const updateLocationDot = (index) => {
	updateActiveDot(locationDots, locationItems, index);
};
locationDots.forEach((dot, index) => {
	addEventListener(dot, () => updateLocationDot(index));
});

//location modals
addEventListener(".glensgaich-btn", () => showModal(".glensgaich-map"));
addEventListener(".tanygrisiau-btn", () => showModal(".tanygirisau-map"));
forEach(".modal-close", (close) => addEventListener(close, hideModal));
