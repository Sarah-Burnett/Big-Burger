// location carousel 
export function locationCarousel() {
    const locationItems = document.querySelectorAll(".location-item");
    const locationDots = document.querySelectorAll(".location-dot");

    const changeLocation = (item, index) => {
    item.addEventListener('click', () => {
    locationDots.forEach( dot => dot.style.background = "#36970F");
    locationItems.forEach (item => {
        item.style.opacity = "0"; 
        item.style.pointerEvents = "none";
    });
    locationDots[index].style.background = "#205909";
    locationItems[index].style.opacity = "1";
    locationItems[index].style.pointerEvents = "auto";
    })};

    locationDots.forEach(changeLocation);
};