export const toggleModal = () => {    

    const showModal = (modal) => {
    if (document.querySelector(".modal-active")) document.querySelector("modal-active").classList.remove("modal-active");
    document.querySelector(modal).classList.add("modal-active");
    };

    const hideModal = () => {
    document.querySelector(".modal-active").classList.remove("modal-active")
    }

    document.querySelector(".glensgaich-btn").addEventListener('click', () => showModal(".glensgaich-map"));
    document.querySelector(".tanygrisiau-btn").addEventListener('click', () => showModal(".tanygirisau-map"));
    document.querySelector(".modal-close span").addEventListener('click', hideModal);

}