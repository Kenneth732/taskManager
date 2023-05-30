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
    let taskList = document.getElementById('taskList')

    taskList.innerHTML = '';
    tasks.map(task => {
        let card = document.createElement('div')
        taskList.textContent = task.name;

        if

    })
}