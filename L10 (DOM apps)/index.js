//TODO>> Show answer system
let a2 = document.querySelector("#a2");
let ansStatus = false;
let showAnswer = (event) => {
  a2.style.transition = "all .3s ease";
  if (ansStatus) {
    a2.style.color = "black";
    a2.style.fontSize = "1rem";
    a2.style.fontWeight = "400";

    event.target.textContent = "اظهر الاجابة ✅";
    event.target.classList.remove("btn-danger");
    ansStatus = false;
  } else {
    a2.style.color = "green";
    a2.style.fontSize = "1.5rem";
    a2.style.fontWeight = "700";

    event.target.textContent = "إخفاء الاجابة 🧹";
    event.target.classList.add("btn-danger");
    ansStatus = true;
  }
};

//TODO>> Toggle mode (dark, light)
let text = document.querySelector("#text");
let toggleMode = (event) => {
  if (event.target.textContent == "🌙 Make dark") {
    text.style.color = "white";
    text.style.backgroundColor = "black";
    event.target.classList.replace("btn-light", "btn-dark");
    event.target.textContent = "☀️ Make light";
  } else {
    text.style.color = "black";
    text.style.backgroundColor = "white";
    event.target.classList.replace("btn-dark", "btn-light");
    event.target.textContent = "🌙 Make dark";
  }
};

//TODO>> Todo List
let taskNameInput = document.querySelector("#taskNameInput");
let todoList = document.querySelector("#todoList");
const addNewTask = () => {
  if (taskNameInput.value.trim()) {
    if (todoList.textContent.trim() == "No Tasks found") {
      todoList.classList.remove("text-danger");
      todoList.textContent = "";
    }
    todoList.innerHTML += `
        <li class="col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-between">${taskNameInput.value} 
          <button onclick="deleteTask(event)" class="btn btn-light btn-sm">❌</button>
        </li>
    `;
    taskNameInput.value = "";
  }
};

const deleteTask = (event) => {
  event.target.parentElement.remove();
  if (todoList.innerHTML.trim() == "") {
    todoList.classList.add("text-danger");
    todoList.textContent = "No Tasks found";
  }
};
