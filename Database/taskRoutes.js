import { getConnection } from "./db.js";

export function getAllTasks(req, res) {
  const sql = "SELECT * FROM tasks";
  getConnection().query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch tasks" });
    }
    res.json(results);
  });
}

export function createTask(req, res) {
  const { title, description, status } = req.body;
  const userId = req.user.userId; // Extracted from JWT token

  const sql =
    "INSERT INTO tasks (title, description, status, user_id) VALUES (?, ?, ?, ?)";
  const values = [title, description, status, userId];

  getConnection().query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to create task" });
    }
    res.status(201).json({ message: "Task created successfully" });
  });
}
