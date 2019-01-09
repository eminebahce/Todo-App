function submitTodo() {

    let inputField = document.getElementById('textInput').value;
    createNewTodo(inputField);

    // reset the input value
    inputField = null;
}

function createNewTodo(inputField) {
    let listItem = document.createElement('li');
    listItem.className = 'todo';

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'todo-' + nextTodoId();
    checkbox.checked = false;
    listItem.appendChild(checkbox);

    let space = document.createTextNode(" ");
    listItem.appendChild(space);

    let label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.innerHTML = inputField;
    listItem.appendChild(label);

    let list = document.getElementById('todolist');
    list.appendChild(listItem);

    updateCounters();
}

function nextTodoId() {
    return document.getElementsByClassName('todo').length + 1;
}

function toggleDone() {
    let checkbox = this;

    if (checkbox.checked) {
        checkbox.parentElement.className = "todo-completed";
    } else {
        checkbox.parentElement.className = "todo";
    }

    updateCounters();
}

function updateCounters() {
    let totalCount = document.getElementById('todo-count');
    let totalTodo = document.getElementsByClassName('todo').length;
    totalCount.innerHTML = totalTodo;

    let doneCount = document.getElementById('done-count');
    let completedTodos = document.getElementsByClassName('todo-completed').length;
    doneCount.innerHTML = completedTodos;

    let allTodos = document.getElementById('total-count');
    let allTodosCount = totalTodo + completedTodos;
    allTodos.innerHTML = allTodosCount;
}

function cleanUpAllTodos() {

    let list = document.getElementById('todolist');
    list.innerHTML = '';
}

function deleteBtn() {
    /** let node = document.getElementById('todolist');
    let child = document.getElementById('todo');
    let throwawayNode = node.removeChild(child);
    */

    let element = document.getElementById("todolist");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

}