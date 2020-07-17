export const hideModal = () => {
    if (document.querySelector(".modal-active")) {
        document.querySelector(".modal-active").classList.remove("modal-active")
    }
}

export const showModal = (modal) => {
    hideModal();
    document.querySelector("nav").classList.add("nav-fixed");
    document.querySelector(modal).classList.add("modal-active");
};

export const toggleModal = () => {    
    const closes = document.querySelectorAll(".modal-close");
    document.querySelector(".glensgaich-btn").addEventListener('click', () => showModal(".glensgaich-map"));
    document.querySelector(".tanygrisiau-btn").addEventListener('click', () => showModal(".tanygirisau-map"));
    closes.forEach( close => close.addEventListener('click', hideModal));
}