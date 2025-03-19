import { findById } from "../../repositories/Task/findById";

export const getById = async (req, res) => {
    try {  
        const data = await findById(req.body.id);
        res.status(200).json({ statusCode: 200, message: "Got task by id", datas: data })
    } catch {
        res.status(500).json({ statusCode: 500, message: "Server internal error" });
    }
}