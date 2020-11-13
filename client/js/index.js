import { updateActiveDot } from "./utilities/dom/updateActiveDot";
import { showModal, hideModal } from "./utilities/dom/toggleModal";
import { updateMenu } from "./utilities/dom/updateMenu";
import {
	addClassList,
	removeClassList,
	toggleClassList,
} from "./utilities/dom/toggleClassList";
import Carousel from "./utilities/dom/Carousel";

//nav bar - fixed on scroll & mob nav
window.onscroll = () => {
	window.pageYOffset >= 10
		? addClassList("nav", "nav-fixed")
		: removeClassList("nav", "nav-fixed");
};
burger.addEventListener("click", () => toggleClassList("nav", "nav-active"));

// smooth scroll
new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true,
	header: "[data-scroll-header]",
});

//update menu contents
starterBtn.addEventListener("click", updateMenu(0));
sidesBtn.addEventListener("click", updateMenu(1));
burgerBtn.addEventListener("click", updateMenu(2));
puddingBtn.addEventListener("click", updateMenu(3));

{
	const review = new Carousel(".review-item", ".review-dot");
	let reviewInterval;
	const setReviewInterval = () => {
		reviewInterval = setInterval(() => review.autoChangeItem(), 3000);
	};
	review.dots.forEach((item, index) => {
		item.addEventListener("click", () => {
			clearInterval(reviewInterval);
			review.changeItem(index);
			setReviewInterval();
		});
	});
	setReviewInterval();
}

{
	const location = new Carousel(".location-item", ".location-dot");
	location.dots.forEach((item, index) => {
		item.addEventListener("click", () => location.changeItem(index));
	});
}

// //review carousel
// {
// 	let reviewCounter = 0;
// 	let reviewInterval;
// 	const reviewItems = document.querySelectorAll(".review-item");
// 	const reviewDots = document.querySelectorAll(".review-dot");
// 	const updateReviewDot = (index) => {
// 		updateActiveDot(reviewDots, reviewItems, index);
// 	};
// 	//auto update review
// 	const autoUpdateReview = () => {
// 		updateReviewDot(reviewCounter);
// 		return reviewCounter < reviewItems.length - 1
// 			? reviewCounter++
// 			: (reviewCounter = 0);
// 	};
// 	const setReviewInterval = () => {
// 		reviewInterval = setInterval(autoUpdateReview, 3000);
// 	};
// 	setReviewInterval();
// 	//manually click to update review
// 	const manualUpdateReview = (index) => {
// 		clearInterval(reviewInterval);
// 		updateReviewDot(index);
// 		reviewCounter = index;
// 		setReviewInterval();
// 	};
// 	reviewDots.forEach((dot, index) => {
// 		addEventListener(dot, () => manualUpdateReview(index));
// 	});
// }

// //location carousel
// {
// 	const locationItems = document.querySelectorAll(".location-item");
// 	const locationDots = document.querySelectorAll(".location-dot");
// 	const updateLocationDot = (index) => {
// 		updateActiveDot(locationDots, locationItems, index);
// 	};
// 	locationDots.forEach((dot, index) => {
// 		addEventListener(dot, () => updateLocationDot(index));
// 	});
// }

//location modals
document
	.querySelector(".glensgaich-btn")
	.addEventListener("click", () => showModal(".glensgaich-map"));
document
	.querySelector(".tanygrisiau-btn")
	.addEventListener("click", () => showModal(".tanygirisau-map"));
document
	.querySelectorAll(".modal-close")
	.forEach((close) => close.addEventListener("click", () => hideModal));
