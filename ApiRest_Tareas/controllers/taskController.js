const taskServices= require('../services/taskServices');

const getAllTasks = (req, res) => {
    const tasks = taskServices.getAllTasks();
    if(tasks.length>0)
        res.status(200).json(tasks);
    else
        res.status(404).json({code: 404, message:"Tareas no encontradas."});
};

const getTaskById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const task = taskServices.getTaskById(id);
    if(task)
        res.status(200).json(task);
    else
        res.status(404).json({code: 404, message:"Tarea no encontrada."});
};

const createTask = (req, res) => {
    const { title, description } = req.body;
    if(!title || !description) {
        return res.status(400).json({code: 400, message:"Título y descripción son requeridos."});
    } else {
        try {
            const task = taskServices.createTask(title, description);
            res.status(201).json(task);
        }catch(err) {
            res.status(500).json({code: 500, message:"Error al crear la tarea."});
        }
    }
};

const updateTask = (req, res) => {
    const { title, description, completed } = req.body;
    const id = parseInt(req.params.id, 10);
    if(!title) {
        return res.status(400).json({code: 400, message:"Título es requerido."});
    } else {
        try {
            const task = taskServices.updateTask(id, title, description, completed);
            if (task === null) {
                return res.status(404).json({code: 404, message:"Tarea no encontrada."});
            }
            res.status(201).json(task);
        }catch(err) {
            res.status(500).json({code: 500, message:"Error al actualizar la tarea."});
        }
    }
}

const deleteTask = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const task = taskServices.deleteTask(id);
    if(task)
        res.status(200).json(task);
    else
        res.status(404).json({code: 404, message:"Tarea no encontrada."});
};

const statisticsTask = (req, res) => {
    const estadisticas = taskServices.statisticsTask();
    if(estadisticas !== null)
        res.status(200).json(estadisticas);
    else
        res.status(404).json({code: 404, message:"Error al obtener las estadisticas."});
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    statisticsTask
}