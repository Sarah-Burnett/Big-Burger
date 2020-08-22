import {
	PUT_BOOKING,
	DELETE_BOOKING,
	POST_BOOKING,
	GET_BOOKING,
	SHOW_CANCELLED,
	SHOW_FAILED,
	SHOW_BOOKED,
	SHOW_FULL,
} from "./types";
import { addSessionStorage } from "./storage";
import { handleModal } from "./handleModal";
import { autoFillForm } from "./utilities";
import axios from 'axios';

const getFetchParams = (type, params) => {
	switch (type) {
		case POST_BOOKING:
			return {
				method: "POST",
				url: "./api/guest/booking",
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
		case GET_BOOKING:
			return {
				method: "GET",
				url: `/api/guest/booking/${params.id}`,
				resolved: function (res) {
					autoFillForm(res.data);
				},
				rejected: function () {
					//TODO:handle rejection
				},
			};
		case PUT_BOOKING:
			return {
				method: "PUT",
				url: `./api/guest/booking/${document.querySelector('#id').value}`,
				resolved: function (res) {
					handleModal(SHOW_BOOKED, res.data)
				},
				rejected: function (err) {
					addSessionStorage("booking", JSON.stringify(params));
					err.response.status === 409
						? handleModal(SHOW_FULL, err.response.data)
						: handleModal(SHOW_FAILED);
				}
			};
		case DELETE_BOOKING:
			return {
				method: "DELETE",
				url: `./api/guest/booking/${params.id}`,
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
	console.log(params);
	axios({ method, url, data: params })
		.then((res) => resolved(res))
		.catch((err) => rejected(err));
};
