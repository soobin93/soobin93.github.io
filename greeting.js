const form = document.querySelector(".name-form"),
    input = form.querySelector("input"),
    greetings = document.querySelector(".greetings");

const USER_LOCAL_STORAGE = "currentUser",
    SHOWING_ON = "showing";

function saveName(name) {
    localStorage.setItem(USER_LOCAL_STORAGE, name);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;

    paintGreetings(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}

function paintGreetings(text) {
    form.classList.remove(SHOWING_ON);

    greetings.classList.add(SHOWING_ON);
    greetings.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);

    if (currentUser === null) {
        askForName();
    } else {
        paintGreetings(currentUser);
    }
}

function init() {
    loadName();
}

init();
