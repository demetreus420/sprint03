let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
// const item = document.querySelector('.slider-item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
//Генерирую точки
const circlesIndicator = document.body.querySelector('.circle-indicator');
let oneDot = '<div class="dots"></div>';
let dots = ' ';
let activeDot = 0;
for (let i = 0; i < itemsCount; i++) dots += oneDot;
circlesIndicator.innerHTML = `${dots}`;
circlesIndicator.style.display = 'flex'
circlesIndicator.style.flexDirection = 'row';
circlesIndicator.style.justifyContent = 'center';
let circles = document.body.querySelectorAll('.dots');
circles.forEach((item) => {
    item.style.minWidth = '20px';
    item.style.backgroundColor = 'silver';
    item.style.padding = '10px';
    item.style.margin = '20px';
    item.style.borderRadius = '50%';
});
circles[activeDot].style.backgroundColor = 'black';

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    if (position == -2892) {
        position = 0;
        activeDot = -1;
    }

    circles.forEach((item) => {
        item.style.backgroundColor = 'silver';
    });
    activeDot++;
    circles[activeDot].style.backgroundColor = 'black';
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    if (position == 0) {
        position = -2892;
        activeDot = 4;
    }
    circles.forEach((item) => {
        item.style.backgroundColor = 'silver';
    });
    activeDot--;
    circles[activeDot].style.backgroundColor = 'black';
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {

    // btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    // btnPrev.disabled = position === 0;

};

function autoNext() {

    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    if (position == -2892) {
        position = 0;
        activeDot = -1;
    }

    circles.forEach((item) => {
        item.style.backgroundColor = 'silver';
    });
    activeDot++;
    circles[activeDot].style.backgroundColor = 'black';
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();

    setTimeout(autoNext, 3000);
}

position = -2892;
autoNext();