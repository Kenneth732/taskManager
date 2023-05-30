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
    handleDisplay(taskManager);
});

let handleDisplay = (tasks) => {
    
}