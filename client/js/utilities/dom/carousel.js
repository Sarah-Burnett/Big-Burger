const { forEach } = require("./forEach");
import { green, darkGreen } from "../styles";
import { hideElement, displayElement } from "./changeVisibility";

const displayDotActive = (dot) => (dot.style.background = green);
const displayDotInactive = (dot) => (dot.style.background = darkGreen);

export default class Carousel {
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
		let index = this.activeIndex + 1;
		if (index < this.length) {
			this.changeItem(index);
			this.activeIndex = index;
			return;
		}
		this.changeItem(0);
		this.activeIndex = 0;
	}
}
