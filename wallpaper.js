const body = document.querySelector("body");

const NUMBER_OF_IMAGES = 2;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add('background-image');
    body.appendChild(image);
}

function getRandomNumber() {
    return Math.floor(Math.random() * NUMBER_OF_IMAGES) + 1;
}

function init() {
    const randomNumber = getRandomNumber();
    paintImage(randomNumber);
}

init();
