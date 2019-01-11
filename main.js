function submitTodo() {

    let inputField = document.getElementById('textInput').value;
    createNewTodo(inputField);

    // reset the input value
    $(document).ready(function() {
        $('#textInput').val('');
    });
}

function createNewTodo(inputField) {
    let listItem = document.createElement('li');
    listItem.className = 'todo';
    listItem.id = 'firstID';

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

    let buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = 'Delete';
    // buttonDelete.onclick = "deleteBtn(); return false"
    buttonDelete.addEventListener("click", deleteBtn)
    listItem.appendChild(buttonDelete);

    let buttonEdit = document.createElement('button');
    buttonEdit.innerHTML = 'Edit';
    listItem.appendChild(buttonEdit);

    let list = document.getElementById('todolist');
    list.appendChild(listItem);

    updateCounters();
}

function nextTodoId() {
    return document.getElementsByClassName('todo').length + 1;
}

function toggleDone() {
    let checkbox = this;
    console.log(checkbox);

    if (checkbox.value) {
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

function deleteBtn(event) {
    //console.log(event)
    /** 
        let parent = document.getElementsByClassName('parentTodo')
        let child = document.getElementsByClassName('todo');
        parent.removeChild(child);
    
        let child = document.getElementById('firstID');
        child.innerHTML = '';
         */
    let catched = document.getElementById('secondID');
    let secondCatched = document.getElementById('firstID');

    if (catched) {
        let parent = document.getElementById('todolist');
        let child = document.getElementById('secondID');
        parent.removeChild(child);
    } else if (secondCatched) {
        let parent = document.getElementById('todolist')
        let child = document.getElementById('firstID');
        parent.removeChild(child);

    }



    /**
     * if (event.target.parentNode) {
            event.target.parentNode.removeChild(node);
        }
     */


}