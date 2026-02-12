let tasks = [
  "عمل المهام",
  "لعب كوره",
  "الذهاب للعمل",
  "قراءة القران",
  "تمشيه ربع ساعه",
];

function showTasks() {
  console.clear();
  console.table(tasks);
}

function addTask() {
  let taskName = prompt("Enter name of your task...");
  tasks.push(taskName);

  showTasks();
}

function removeTask() {
  let taskIndex = +prompt("Enter task number you want to remove...");
  tasks.splice(taskIndex, 1);

  showTasks();
}

function updateTask() {
  let taskIndex = +prompt("Enter task number you want to update...");
  let newTaskName = prompt("Enter new task name...");
  tasks[taskIndex] = newTaskName;

  showTasks();
}
