import { addClassList, removeClassList } from "./toggleClassList";

export const hideModal = () => {
	if (document.querySelector(".modal-active")) {
		removeClassList(".modal-active", "modal-active");
	}
};

export const showModal = (modal) => {
	hideModal();
	addClassList("nav", "nav-fixed");
	addClassList(modal, "modal-active");
};
