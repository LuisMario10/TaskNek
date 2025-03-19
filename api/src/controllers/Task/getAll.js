import { findAll } from "../../repositories/Task/findAll";

export const getAll = async (req, res) => {
    try {
        const allDatas = await findAll();
        res.status(200).json({ statusCode: 200, message: "Got all tasks", datas: allDatas });
    } catch {
        res.status(500).json({ statusCode: 500, message: "Server Internal Error" });
    }
}