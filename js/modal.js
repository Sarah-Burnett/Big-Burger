
export function toggleModal() {    
    const mapBtnG = document.querySelector(".glensgaich-btn");
    const mapBtnT = document.querySelector(".tanygrisiau-btn");
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


    mapBtnG.addEventListener('mouseover', () => {showModal("#glensgaich-map")});
    mapBtnT.addEventListener('mouseover', () => {showModal("#tanygrisiau-map")});

    document.querySelector(".modal-close").addEventListener('click', hideModal);

    hideModal();
}
