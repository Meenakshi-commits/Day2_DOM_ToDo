const taskInput = document.getElementById('todo-input');
const taskList = document.getElementById('todo-list');
const addTaskButton = document.getElementById('add-todo');

addTaskButton.addEventListener("click",()=> {
    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    const li = document.cr
})