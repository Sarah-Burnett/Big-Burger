import { green, darkGreen } from "../styles";
import { hideElement, displayElement } from "./changeVisibility";

const changeBackground = (dot, color) => dot.style.background = color;

export const updateActiveDot = (dotList, textList, index) => {
	dotList.forEach((dot) => changeBackground(dot, green));
	textList.forEach((item) => hideElement(item));
	changeBackground(dotList[index], darkGreen);
	displayElement(textList[index]);
};
