import { green, darkGreen } from './styles';

// location carousel 
export const locationCarousel = () => {
    const locationItems = document.querySelectorAll(".location-item");
    const locationDots = document.querySelectorAll(".location-dot");

    const changeLocation = (item, index) => {
    item.addEventListener('click', () => {
    //remove previous
    locationDots.forEach( dot => dot.style.background = green);
    locationItems.forEach (item => {
        item.style.opacity = "0"; 
        item.style.pointerEvents = "none";
    });
    //add new
    locationDots[index].style.background = darkGreen;
    locationItems[index].style.opacity = "1";
    locationItems[index].style.pointerEvents = "auto";
    })};

    locationDots.forEach(changeLocation);
}; 