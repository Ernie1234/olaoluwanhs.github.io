const right = document.getElementById('right');
const left = document.getElementById('left');
const carousel = document.querySelector('.carousel');

let counter = 1;
function forward() {
    if (counter === 3) {
        counter = 0;
    }
    carousel.style.transform = `translateX(-${counter * 100}vw)`;
    counter = counter + 1;
}
right.addEventListener('click', forward);

var counterBack;
left.addEventListener('click', () => {

    counter -= 1;

    if (counter < 0) {
        counter = 2;

    }
    carousel.style.transform = `translateX(-${counter * 100}vw)`;

});
setInterval(forward, 4000)