const Task = require('../models/task');

let tasks = [
    { id: 1, title: 'Tarea 1', description: 'Esta es la tarea número 1', completed: false, createdTask:"2022-02-02T22:27:36.781Z" },
    { id: 2, title: 'Tarea 2', description: 'Esta es la tarea número 2', completed: true, createdAt: "2025-01-15T22:27:36.781Z" },
    { id: 3, title: 'Tarea 3', description: 'Esta es la tarea número 3', completed: true, createdAt: "2025-01-01T22:27:36.781Z" },
];

function getAllTasks() {
    return tasks;
}

function getTaskById(taskId) {
    const task = tasks.find(task => task.id === taskId);
    console.log(task);
    return task;
} 

function createTask(title, description) {
    const id = tasks.length +1;
    const newTask = new Task(id, title, description);
    tasks.push(newTask);
    return newTask;
}

function updateTask(taskId, title, description, completed) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.title = title || task.title;
        task.description = description || task.description;
        task.completed = completed || task.completed;
        return task;
    }
    return null;
}

function deleteTask(taskId) {
    let indice = tasks.findIndex(task => task.id === taskId);
    if (indice !== -1) {
        return tasks.splice(indice, 1)[0]; // Elimina y devuelve la tarea eliminada
    }
    return null;
}

function statisticsTask(){
    // Cantidad total de tareas.
    // Tarea más reciente (fecha de creación más reciente).
    // Tarea más antigua (fecha de creación más antigua).
    // Cantidad de tareas completadas y pendientes.
    const estadisticas = {
        totalTasks: tasks.length,
        newestTask: tasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))[tasks.length - 1],
        oldestTask: tasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))[0],
        completedTasks: tasks.filter(task => task.completed).length,
        pendingTasks: tasks.filter(task => !task.completed).length,
    }
    return estadisticas;
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    statisticsTask,
};