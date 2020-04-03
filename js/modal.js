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
    document.querySelector("#notification").style.display = "none";
    }

    function showClosure(){
        const message = "<h1>Covid-19 Coronavirus</h1><p>Unfortunately we are CLOSED until further notice<br><br>Thank you to all our loyal customers<br><br>Take care and hopefully see you soon</p>"
        document.querySelector("#notification").innerHTML = message;
        showModal("#notification");
    }
    
    document.querySelector(".glensgaich-btn").addEventListener('click', () => {showModal("#glensgaich-map")});
    document.querySelector(".tanygrisiau-btn").addEventListener('click', () => {showModal("#tanygrisiau-map")});
    document.querySelector(".modal-close").addEventListener('click', hideModal);

    hideModal();
    showClosure();

    


}