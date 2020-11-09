import axios from "axios";
import {
	PUT_BOOKING,
	DELETE_BOOKING,
	POST_BOOKING,
	GET_BOOKING,
	SHOW_CANCELLED,
	SHOW_FAILED,
	SHOW_BOOKED,
	SHOW_FULL,
	GET_AVAILABILITY,
} from "./types";
import {
	addSessionStorage,
	removeSessionStorage,
} from "../storage/addSessionStorage";
import { handleModal } from "./handleModal";
import { autoFillForm } from "./autofillForm";
import { showError } from "./validateBooking";
import { setAvailableParty } from "./availableParty";

const getFetchParams = (type, params) => {
	switch (type) {
		case GET_AVAILABILITY:
			return {
				method: "GET",
				url: `./api/book/avail
				?restaurant=${params.restaurant}
				&day=${params.day}
				&time=${params.time}
				&id=${params.id}`,
				resolved: function (res) {
					setAvailableParty(res.data.party);
				},
				rejected: function (res) {
					console.log("fail");
					// setAvailableParty([2, 3, 4, 5, 6, 7, 8]);
				},
			};
		case POST_BOOKING:
			return {
				method: "POST",
				url: "./api/book",
				resolved: function (res) {
					removeSessionStorage("booking");
					handleModal(SHOW_BOOKED, res.data);
				},
				rejected: function (err) {
					addSessionStorage("booking", JSON.stringify(params));
					err.response.status === 409
						? handleModal(SHOW_FULL, err.response.data)
						: handleModal(SHOW_FAILED);
				},
			};
		case GET_BOOKING:
			return {
				method: "GET",
				url: `/api/booking/${params.id}`,
				resolved: function (res) {
					res.data ? autoFillForm(res.data) : showError(0);
				},
				rejected: function () {
					showError(0);
				},
			};
		case PUT_BOOKING:
			return {
				method: "PUT",
				url: `./api/booking/${document.querySelector("#id").value}`,
				resolved: function (res) {
					handleModal(SHOW_BOOKED, res.data);
				},
				rejected: function (err) {
					addSessionStorage("booking", JSON.stringify(params));
					err.response.status === 409
						? handleModal(SHOW_FULL, err.response.data)
						: handleModal(SHOW_FAILED);
				},
			};
		case DELETE_BOOKING:
			return {
				method: "DELETE",
				url: `./api/booking/${params.id}`,
				resolved: function () {
					handleModal(SHOW_CANCELLED);
				},
				rejected: function () {
					handleModal(SHOW_FAILED);
				},
			};
	}
};

export const fetch = (type, params) => {
	const { method, url, resolved, rejected } = getFetchParams(type, params);
	axios({ method, url, data: params })
		.then((res) => {
			console.log(res);
			return resolved(res);
		})
		.catch((err) => rejected(err));
};
