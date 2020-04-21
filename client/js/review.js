
export function reviewCarousel() {

    let reviewCounter = 0;
    const reviewItems = document.querySelectorAll(".review-item");
    const reviewDots = document.querySelectorAll(".review-dot");

    function autoReview() {
    reviewDots.forEach( dot => {
        dot.style.background = "#36970F";
        });
    reviewItems.forEach ( review => {
        review.style.opacity = "0";
    });
    reviewDots[reviewCounter].style.background = "#205909";
    reviewItems[reviewCounter].style.opacity = "1";
    if (reviewCounter === reviewItems.length -1 ) return reviewCounter = 0;
    reviewCounter ++;
    };


    const reviewInterval = () => setInterval(autoReview, 3000);
    reviewInterval();

    const clickReview = (item, index) => {
    clearInterval(reviewInterval);
    item.addEventListener('click', () => {
        reviewDots.forEach( dot => dot.style.background = "#36970F");
        reviewItems.forEach (item => item.style.opacity = "0");
        reviewDots[index].style.background = "#205909";
        reviewItems[index].style.opacity = "1";
        reviewCounter = index;
        reviewInterval();
    })};

    reviewDots.forEach(clickReview);

};