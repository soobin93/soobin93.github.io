const clockContainer = document.querySelector('.clock'),
    clockTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    clockTitle.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
