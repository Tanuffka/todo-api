import express from "express";
import Task from "../models/Task.js";
import {
  createTask,
  getTask,
  getAllTasks,
  deleteTask,
  updateTask
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getAllTasks);

router.get("/:id", getTask);

router.post("/", createTask);

router.delete("/:id", deleteTask); 

router.patch("/:id", updateTask);

router.put("/:id", updateTask);

export default router;
