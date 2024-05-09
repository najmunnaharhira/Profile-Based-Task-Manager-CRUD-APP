// taskController.js

import express from "express";
import {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} from "./task.js"; // Import createTask function from the correct module
import { authenticate } from "./authMiddleware.js"; // Import authentication middleware

const router = express.Router();

// Protected routes (authentication required)
router.use(authenticate);

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export { router as taskRoutes };
