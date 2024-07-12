import { Router } from "express";
import TaskController from "./app/controllers/TaskController";

const router = Router();
const taskController = new TaskController();

router.get("/", taskController.getWelcome);
router.get("/tasks", taskController.getAll);
router.get("/tasks/:id", taskController.getTaskById);
router.post("/tasks", taskController.post);
router.put("/tasks/:id", taskController.put);
router.delete("/tasks/:id", taskController.delete);

export default router;