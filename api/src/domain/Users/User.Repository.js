import { makeQuery } from "../../shared/database/ConnectionDataBase";

export const create = async user => {
    const sql = `INSERT INTO users SET ?;`;
    await makeQuery(sql, user, "No will possible register user in data base!");
}

export const findAll = async () => {
    const sql = `SELECT * FROM users;`;
    return await makeQuery(sql, "Not will possible get all datas in data base")
}

export const findById = async id => {
    const sql = "SELECT * FROM tasks WHERE id = ?";
    return makeQuery(sql, id, "User not founded!"); 
}
export const findByEmail = async email => {
    const sql = "SELECT * FROM tasks WHERE email = ?";
    return makeQuery(sql, email, "User not founded!"); 
}

export const update = async ([id, task]) => {
    if(!findById(id)) return 0;

    const sql = "UPDATE tasks SET = ? WHERE id = ?";
    await makeQuery(sql, [id, task], "User cannot be updated!!!")
}

export const deleteUser = async id => {
    const sql = "DELETE FROM users WHERE id = ?;"
    await makeQuery(sql, id, "user cannot be deleted!!")
}

