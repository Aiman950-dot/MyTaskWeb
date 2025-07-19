document.getElementById('taskForm').addEventListener('submit', function (e) {
  e.preventDefault(); 

  const task = {
    title: document.getElementById('taskTitle').value,
    description: document.getElementById('taskDescription').value,
    dueDate: document.getElementById('taskDate').value,
    category: document.getElementById('taskCategory').value
  };

  // 1. Get existing tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // 2. Add new task
  tasks.push(task);

  // 3. Save updated array back to localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  
  //window.location.href = "dashboard.html";

  console.log("🚀 Task Submitted:", task);
  alert("Task logged to console!");

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1000);
  
});  
