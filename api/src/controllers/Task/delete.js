import { deleteTask } from "../../repositories/Task/delete";

export const dell = async (req, res) => {
    try {
        await deleteTask(req.body.id);
        res.status(201).json({ statusCode: 201, message: "Task deleted" });
    } catch {
        res.status(500).json({ statusCode: 500, message: "Server Internal Error" });
    }
}