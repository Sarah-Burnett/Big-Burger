const { forEach } = require("./forEach");
import { green, darkGreen } from "../styles";
import { hideElement, displayElement } from "./changeVisibility";

const displayDotActive = (dot) => (dot.style.background = green);
const displayDotInactive = (dot) => (dot.style.background = darkGreen);

class Carousel {
	constructor(items, dots) {
		this.items = document.querySelectorAll(items);
		this.dots = document.querySelectorAll(dots);
		this.length = this.items.length;
		this.activeIndex = 0;
		this.interval = false;
	}
	changeItem(index) {
		hideElement(this.items[this.activeIndex]);
		displayDotInactive(this.dots[this.activeIndex]);
		displayElement(this.items[index]);
		displayDotActive(this.dots[index]);
		this.activeIndex = index;
		return this;
	}
	autoChangeItem() {
		if (this.activeIndex < this.length) {
			this.activeIndex++;
		}
		this.changeItem(this.activeIndex);
	}
}

{
	const review = new Carousel(".review-item", ".review-dot");
	let reviewInterval;
	const setReviewInterval = () => {
		reviewInterval = setInterval(review.autoChangeSlide(), 3000);
	};
	forEach(review.items, (item, index) => {
		clearInterval(reviewInterval);
		review.changeItem(index);
		setReviewInterval();
	});
}

{
	const location = new Carousel(".location-item", ".location-dot");
	forEach(location.items, (item, index) => {
		location.hideOldItem().showNewItem(index);
	});
}
