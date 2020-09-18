import { green, darkGreen } from "../styles";
import { changeBackground } from "./changeBackground";
import { hideElement, displayElement } from "./changeVisibility";

export const updateActiveDot = (dotList, textList, index) => {
	dotList.forEach((dot) => changeBackground(dot, green));
	textList.forEach((item) => hideElement(item));
	changeBackground(dotList[index], darkGreen);
	displayElement(textList[index]);
};
