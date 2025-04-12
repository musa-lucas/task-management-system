const modal = document.getElementById("modal");
const onSummit = document.getElementById("onSubmmit");
const closeModal = document.getElementById("closeModal");

onSummit.addEventListener("submit", () => {
  modal.style.display = "flex";
  event.preventDefault();
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});


function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  
  if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
      
  };

  const li = document.createElement('li');
  li.innerHTML = `
      ${taskInput.value}
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;
  
  taskList.appendChild(li);
  taskInput.value = '';
}

function deleteTask(button) {
  button.parentElement.remove();
}