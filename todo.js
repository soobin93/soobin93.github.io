const toDoForm = document.querySelector(".todo-form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".todo-list");

const TO_DO_LOCAL_STORAGE = "toDo";

let toDos = [];

function loadToDoList() {
    const loadedToDos = localStorage.getItem(TO_DO_LOCAL_STORAGE);

    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);

        parsedToDos.forEach(function (toDoObj) {
            paintToDo(toDoObj.text);
        });
    }
}

function paintToDo(text) {
    const listItemAttribute = document.createElement("li");
    const deleteButton = document.createElement("button");
    const span = document.createElement("span");
    const id = `${toDos.length + 1}`;

    deleteButton.innerText = "✖";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", deleteToDo);
    span.innerText = text;

    listItemAttribute.appendChild(deleteButton);
    listItemAttribute.appendChild(span);
    listItemAttribute.id = id;

    toDoList.appendChild(listItemAttribute);

    const toDo = {
        id: id,
        text: text
    };

    toDos.push(toDo);
    localStorage.setItem(TO_DO_LOCAL_STORAGE, JSON.stringify(toDos));
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function deleteToDo(event) {
    const button = event.target;
    const li = button.parentNode;

    toDoList.removeChild(li);

    toDos = toDos.filter(function (toDo) {
        return toDo.id !== li.id;
    });

    localStorage.setItem(TO_DO_LOCAL_STORAGE, JSON.stringify(toDos));
}

function init () {
    loadToDoList();

    toDoForm.addEventListener("submit", handleSubmit);
}

init();