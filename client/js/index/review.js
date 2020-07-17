import { green, darkGreen } from './styles';

export const reviewCarousel = () => {
    let reviewCounter = 0;
    const reviewItems = document.querySelectorAll(".review-item");
    const reviewDots = document.querySelectorAll(".review-dot");

    const changeReview = (index) => {
        //remove previous
        reviewDots.forEach( dot => dot.style.background = green);
        reviewItems.forEach (item => item.style.opacity = "0");
        // add new
        reviewDots[index].style.background = darkGreen;
        reviewItems[index].style.opacity = "1";
    }

    //auto change review
    const autoReview = () => {
    changeReview(reviewCounter);
    if (reviewCounter === reviewItems.length -1 ) return reviewCounter = 0;
    reviewCounter ++;
    };

    const reviewInterval = () => setInterval(autoReview, 3000);
   
    //manual change review
    const clickReview = (item, index) => {
    clearInterval(reviewInterval);
    item.addEventListener('click', () => {
        changeReview(index);
        reviewInterval();
    })};

    reviewInterval();
    reviewDots.forEach(clickReview);

};