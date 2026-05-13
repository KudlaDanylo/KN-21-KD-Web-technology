const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

const sortDateBtn = document.getElementById('sortDateBtn');

const btnCompleted = document.getElementById('btnCompleted');
const btnUncompleted = document.getElementById('btnUncompleted');
const btnAll = document.getElementById('btnAll');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let sortAscending = true;
let currentFilter = 'all';

function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('uk-UA') + ' ' + date.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
}

    
    function renderTasks() {
        taskList.innerHTML = '';
        
        let tasksToRender = tasks;
        if (currentFilter === 'completed') {
            tasksToRender = tasks.filter(task => task.completed);
        } else if (currentFilter === 'uncompleted') {
            tasksToRender = tasks.filter(task => !task.completed);
        }
        
        tasksToRender.forEach(task => {
            const li = document.createElement('li');
            if (task.completed) li.classList.add('completed');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => toggleTask(task.id));

            const taskContent = document.createElement('div');
            taskContent.className = 'task-content';
            
            const textSpan = document.createElement('span');
            textSpan.className = 'task-text';
            textSpan.textContent = task.text;
            
            const dateSpan = document.createElement('span');
            dateSpan.className = 'task-date';
            dateSpan.textContent = formatDate(task.timestamp);

            taskContent.appendChild(textSpan);
            taskContent.appendChild(dateSpan);

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = '❌';
            deleteBtn.addEventListener('click', () => deleteTask(task.id));

            li.appendChild(checkbox);
            li.appendChild(taskContent);
            li.appendChild(deleteBtn);

            taskList.appendChild(li);
        });

        updateActiveButton();
    }

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const text = taskInput.value.trim();
        if (text !== '') {
            const newTask = {
                id: Date.now(), 
                text: text,
                completed: false,
                timestamp: Date.now() 
            };
            tasks.push(newTask);
            saveTasks();
            renderTasks();
            taskInput.value = ''; 
        }
    });

    function toggleTask(id) {
        tasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        saveTasks();
        renderTasks();
    }

    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
    }


    function updateActiveButton() {
        btnAll.classList.remove('active');
        btnCompleted.classList.remove('active');
        btnUncompleted.classList.remove('active');

        if (currentFilter === 'all') btnAll.classList.add('active');
        if (currentFilter === 'completed') btnCompleted.classList.add('active');
        if (currentFilter === 'uncompleted') btnUncompleted.classList.add('active');
    }

    btnAll.addEventListener('click', () => {
        currentFilter = 'all';
        renderTasks();
    });

    btnCompleted.addEventListener('click', () => {
        currentFilter = 'completed';
        renderTasks();
    });

    btnUncompleted.addEventListener('click', () => {
        currentFilter = 'uncompleted';
        renderTasks();
    });

    // Сортування
    sortDateBtn.addEventListener('click', () => {
        if (sortAscending) {
            tasks.sort((a, b) => b.timestamp - a.timestamp); 
        } else {
            tasks.sort((a, b) => a.timestamp - b.timestamp); 
        }
        sortAscending = !sortAscending;
        renderTasks(); 
    });
    renderTasks();