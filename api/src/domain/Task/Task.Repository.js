import { makeQuery } from "../../shared/database/ConnectionDataBase"

export const create = async task => {
    const sql = `INSERT INTO tasks SET ?;`;
    return await makeQuery(sql, task, "No will possible register task in data base!");
}

export const findAll = async () => {
    const sql = `SELECT * FROM tasks;`;
    return await makeQuery(sql, "Not will possible get all datas in data base")
}

export const findById = async id => {
    const sql = "SELECT * FROM tasks WHERE id = ?";
    return await makeQuery(sql, id, "Task not founded!"); 
}

export const update = async ([id, task]) => {
    const sql = "UPDATE tasks SET = ? WHERE id = ?";
    await makeQuery(sql, [id, task], "Task cannot be updated!!!")
}

export const deleteTask = async id => {
    const sql = "DELETE FROM tasks WHERE id = ?;"
    await makeQuery(sql, id, "Task cannot be deleted!!")
}
