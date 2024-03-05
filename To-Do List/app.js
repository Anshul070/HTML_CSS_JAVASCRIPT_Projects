document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = taskInput.value;
    const container = document.createElement("div");

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        removeTask(taskItem);
    };

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
        editTask(taskItem);
    };
    container.appendChild(deleteButton);
    container.appendChild(editButton);
    taskItem.appendChild(container);
    taskList.appendChild(taskItem);

    saveTasks();

    taskInput.value = '';
}

function removeTask(taskItem) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskItem);

    saveTasks();
}

function editTask(taskItem) {
    const updatedTask = prompt('Edit task:', taskItem.textContent);

    if (updatedTask !== null) {
        taskItem.textContent = updatedTask;

        saveTasks();
    }
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];

    taskList.childNodes.forEach(function (taskItem) {
        tasks.push(taskItem.textContent);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        const tasks = JSON.parse(storedTasks);

        tasks.forEach(function (taskText) {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function () {
                removeTask(taskItem);
            };

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = function () {
                editTask(taskItem);
            };

            taskItem.appendChild(deleteButton);
            taskItem.appendChild(editButton);
            taskList.appendChild(taskItem);
        });
    }
}

