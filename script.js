let taskManager = []

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let taskInput = e.target.taskInput.value;

    if(taskInput.trim() === ''){
        alert(`Please enter Task`)
    }return;

    let newTask = {
        taskInput: taskInput
    }
    taskManager.push(newTask);
    displayTask(taskManager);
});

let displayTask = (tasks) => {
    let taskListElement = document.getElementById('taskList')

    taskListElement.innerHTML = '';

    tasks.map(task => {
        let createElement = document.createElement('li')
        createElement.textContent = task.name;

        if(task.completed){
            createElement.classList.add('completed')
        }
    })
}
