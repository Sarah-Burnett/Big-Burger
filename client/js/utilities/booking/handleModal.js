import { SHOW_BOOKED, SHOW_FAILED, SHOW_FULL, SHOW_CANCELLED } from "./types";
import { showModal } from "../dom/toggleModal";

const getModalParams = (type, payload) => {
	switch (type) {
		case SHOW_BOOKED:
			return {
				modalSelector: ".bookSuccess",
				HTMLSelector: "#_id",
				newHTML: `<a href="booking?${payload._id}">${payload._id}</a>`,
			};
		case SHOW_FAILED:
			return {
				modalSelector: ".bookFail",
			};
		case SHOW_FULL:
			return {
				modalSelector: ".bookFull",
				HTMLSelector: ".bookingDate",
				newHTML:
					"<div>" +
					`<p>Date: <span>${payload.day}</span></p>` +
					`<p>Time: <span>${payload.time}</span></p>` +
					"</div>",
			};
		case SHOW_CANCELLED:
			return {
				modalSelector: ".bookDeleted",
			};
	}
};

export const handleModal = (type, payload) => {
	const { modalSelector, HTMLSelector, newHTML } = getModalParams(
		type,
		payload
	);
	console.log(modalSelector, HTMLSelector, newHTML);
	if (HTMLSelector) document.querySelector(HTMLSelector).innerHTML = newHTML;
	showModal(modalSelector);
};
