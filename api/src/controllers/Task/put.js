import { update } from "../../domain/Task/update";

export const put = async (req, res) => {
    try {
        const { id, title, bodyPost } = req.body;
        await update([ id, { title, bodyPost } ])
        res.status(201).json({ statusCode: 201, message: "Task updated" });
    } catch {
        res.status(500).json({ statusCode: 500, message: "Server internal error" })
    }
}