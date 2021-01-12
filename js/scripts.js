document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelector('.reviews');
    if (reviews) {
        reviewsResize();
    }
});
window.addEventListener('resize', reviewsResize);

function reviewsResize() {
    const reviewsCounter = document.querySelector('.reviews__counter');
    const reviewsImgBox = document.querySelector('.reviews__img-box');
    const reviewsImgBoxHeight = reviewsImgBox.clientHeight;

    const reviewsControls = document.querySelector('.reviews__controls');

    if ( window.innerWidth <= 768 ) {
        reviewsCounter.style.top = reviewsImgBoxHeight + 'px';
        reviewsControls.style.top = reviewsImgBoxHeight / 2 + 'px';
    } else {
        reviewsCounter.style.top = 'auto';
        reviewsControls.style.top = 'auto';
    }
}