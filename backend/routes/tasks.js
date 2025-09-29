const express = require("express");
const router = express.Router();

let tasks = [];

router.get("/", (req, res) => {
  res.json(tasks);
});

router.post("/", (req, res) => {
  const { text, date } = req.body;
  const newTask = { id: Date.now(), text, date, completed: false };
  tasks.push(newTask);
  res.json(newTask);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { text, completed, date } = req.body;
  tasks = tasks.map(task => task.id === id ? { ...task, text, completed, date } : task);
  const updated = tasks.find(task => task.id === id);
  res.json(updated);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
