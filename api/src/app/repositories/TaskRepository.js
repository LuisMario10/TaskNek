import { requestInDataBase } from "../../config/ConnectionDataBase.js";

export default class TaskRepository {
 
    constructor() {}

    create(task) {
        const sql = "INSERT INTO task SET ?;"
        return requestInDataBase(sql, task, "No will possible register task in data base!");
    }
    
    findAll() {
        const sql = "SELECT * FROM task;";
        return requestInDataBase(sql, "Not will possible get all datas in data base")
    }
    
    findById(id) {
        const sql = "SELECT * FROM task WHERE id = ?;";
        return requestInDataBase(sql, id, "Not will possible find task in the data base")
    }

    update(task, id) {
        const sql = "UPDATE task SET ? WHERE id = ?"
        return requestInDataBase(sql, [id, task], "Not will possible update task in data base")
    }

    delete(id) {
        const sql = "DELETE FROM task WHERE id = ?;"
        requestInDataBase(sql, id, "Not will possible delete task in database")
    }
}
