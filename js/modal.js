export function toggleModal() {    
    const modal = document.querySelector(".modal-bg");

    function showModal(contents) {
    modal.classList.remove("modal-inactive");
    modal.classList.add("modal-active");
    document.querySelector(contents).style.display = "block";
    };

    function hideModal() {
    modal.classList.remove("modal-active");
    document.querySelector("#glensgaich-map").style.display = "none";
    document.querySelector("#tanygrisiau-map").style.display = "none";
    }

    document.querySelector(".glensgaich-btn").addEventListener('click', () => {showModal("#glensgaich-map")});
    document.querySelector(".tanygrisiau-btn").addEventListener('click', () => {showModal("#tanygrisiau-map")});
    document.querySelector(".modal-close").addEventListener('click', hideModal);

    hideModal();
    

}