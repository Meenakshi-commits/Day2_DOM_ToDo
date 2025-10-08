const taskInput = document.getElementById('todo-input');
const taskList = document.getElementById('todo-list');
const addTaskButton = document.getElementById('add-todo');

addTaskButton.addEventListener("click",()=> {
    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "text-red-500 hover:text-red-700";
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
    li.appendChild(deleteButton
        
    )

})