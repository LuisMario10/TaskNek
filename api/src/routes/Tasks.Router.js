import { Router } from "express";

const router = Router();
const taskController = new TaskController();

router.get("/tasks", taskController.getAll);
router.get("/tasks/:id", taskController.getTaskById);
router.post("/tasks", taskController.post);
router.put("/tasks/:id", taskController.put);
router.delete("/tasks/:id", taskController.delete);

export default router;