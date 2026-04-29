document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskList = document.getElementById('task-list');
  const taskTitle = document.getElementById('task-title');
  const taskDescription = document.getElementById('task-description');

  // Load tasks on page load
  loadTasks();

  // Add task
  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();
    if (!title) return;

    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    });

    if (response.ok) {
      taskTitle.value = '';
      taskDescription.value = '';
      loadTasks();
    }
  });

  // Load and display tasks
  async function loadTasks() {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();
    displayTasks(tasks);
  }

  function displayTasks(tasks) {
    taskList.innerHTML = '';
    tasks.forEach(task => {
      const taskDiv = document.createElement('div');
      taskDiv.className = `task ${task.completed ? 'completed' : ''}`;
      taskDiv.setAttribute('data-id', task.id);
      taskDiv.innerHTML = `
        <div>
          <h3>${task.title}</h3>
          <p>${task.description}</p>
        </div>
        <div>
          <button class="complete-btn" onclick="toggleComplete(${task.id}, ${task.completed})">
            ${task.completed ? 'Undo' : 'Complete'}
          </button>
          <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
          <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        </div>
      `;
      taskList.appendChild(taskDiv);
    });
  }

  // Toggle complete
  window.toggleComplete = async (id, currentCompleted) => {
    const response = await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !currentCompleted })
    });
    if (response.ok) {
      loadTasks();
    }
  };

  // Edit task (simplified)
  window.editTask = (id) => {
    alert('Edit functionality not implemented yet');
  };

  // Delete task
  window.deleteTask = async (id) => {
    if (confirm('Are you sure you want to delete this task?')) {
      const response = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
      if (response.ok) {
        loadTasks();
      }
    }
  };
});