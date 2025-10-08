# 🧾 To-Do List App (Tailwind CSS + JavaScript)

A **modern and interactive To-Do List App** built with **HTML, Tailwind CSS, and Vanilla JavaScript**.  
This project demonstrates key **DOM Manipulation** concepts — adding, removing, and updating elements dynamically in the browser.

---

## 🎯 Project Goal

- Practice **DOM manipulation** and **event handling** with JavaScript.  
- Build a responsive UI using **Tailwind CSS**.  
- Create a simple and interactive To-Do app suitable for beginners.

---

## 🧩 Folder Structure
Day2_DOM_ToDo_Tailwind/
│
├── index.html # Main HTML structure of the app
├── script.js # JavaScript logic for adding/removing tasks
└── README.md # Documentation file (this file)


---

## 💻 Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure and layout |
| Tailwind CSS (CDN) | Styling and responsiveness |
| JavaScript (ES6) | Logic and DOM manipulation |

---

## 🧱 Features

- Add tasks dynamically.  
- Remove tasks with a delete button.  
- Styled using **Tailwind CSS** for modern design.  
- Responsive and interactive UI.

---

## ⚡ How It Works

### index.html
- Contains input box (`taskInput`) to type tasks.  
- Add button (`addBtn`) to insert tasks into the list.  
- Task list (`taskList`) displays all tasks dynamically.  
- Tailwind classes provide styling, spacing, and hover effects.

### script.js

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition";

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "text-gray-700";

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "text-red-500 hover:text-red-700 text-lg";
  delBtn.addEventListener("click", () => li.remove());

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
Logic:

User types a task and clicks Add.

A new <li> element is created with the task text and delete button.

The <li> is appended to <ul id="taskList">.

Clicking ❌ deletes the task.

💡 Next Enhancements

Task completion toggle (strike-through effect).

Save tasks in Local Storage to persist data.

Edit task name.

Clear all tasks button.

Dark/Light theme toggle.

🧠 Key Concepts Covered
Concept	Usage
DOM Selection	getElementById, querySelector
Creating Elements	document.createElement()
Appending Elements	parent.appendChild()
Removing Elements	element.remove()
Event Handling	addEventListener()
Updating Content	element.textContent = "..."
✨ Author

👩‍💻 [MEENAKSHI]
Learning DOM Manipulation with JavaScript & Tailwind CSS
Made with ❤️ using simple, clean, beginner-friendly code.

