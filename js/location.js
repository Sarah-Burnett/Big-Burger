// location carousel 

export function locationCarousel() {
    const locationItems = document.querySelectorAll(".location-item");
    const locationDots = document.querySelectorAll(".location-dot");

    const changeLocation = (item, index) => {
    item.addEventListener('click', () => {
    locationDots.forEach( dot => dot.style.background = "#36970F");
    locationItems.forEach (item => item.style.opacity = "0");
    locationDots[index].style.background = "darkgreen";
    locationItems[index].style.opacity = "1";
    })};

    locationDots.forEach(changeLocation);
};