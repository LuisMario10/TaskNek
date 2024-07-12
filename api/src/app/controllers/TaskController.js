import TaskRepository from "../repositories/TaskRepository.js";

export default class TaskController {

    constructor() {}

    getWelcome(req, res) { res.send("Bem Vindo ao TaskNek v1"); }

    async getAll(req, res) { 
        const resultRepository = await new TaskRepository().findAll();
        res.json(resultRepository);
     }

    async getTaskById(req, res) {
        const id = req.params.id;
        const resultRepository = await new TaskRepository().findById(id);
        res.json(resultRepository);
    }

    async post(req, res) {
        const task = req.body;
        const resultRepository = await new TaskRepository().create(task);
        res.json(resultRepository)
    }

    async put(req, res) {
        const id = req.params.id
        const taskUpdate = req.body;
        const resultRepository = await new TaskRepository().update(task, id);
        res.json(resultRepository); 
    }

    async delete(req, res) {
        const id = req.params.id;
        const resultRepository = await new TaskRepository().delete(task, id);
        res.json(resultRepository);
    }
}