//select elements and assign them to variable
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');


//function
let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
}


//this fun add the tast in incomplete area
let addtask = function (event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = '';

    bindInCompleteItem(listItem, completeTask);
}


// this fun add the tast in complete area
let completeTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerText = 'Delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();

    completeUl.appendChild(listItem);

    bindCompleteTask(listItem, deleteTask);
}


//this fun delete the task from completed task area
let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindCompleteTask = function (taskItem, clickDelete) {
    let deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.onclick = clickDelete;
}


let bindInCompleteItem = function (taskItem, checkBoxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClick;
}
for (let i = 0; i < todoUl.children.length; i++) {
    bindInCompleteItem(todoUl.children[i], completeTask);
}
for (let i = 0; i < completeUl.children.length; i++) {
    bindCompleteTask(completeUl.children[i], deleteTask);
}
form.addEventListener('submit', addtask);