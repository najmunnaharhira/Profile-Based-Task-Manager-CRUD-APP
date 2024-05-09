import express from "express";

import bodyParser from "body-parser";

import path from "path";
// import { authRoutes } from "./authRoutes.js";
import { taskRoutes } from "./taskController.js";
import { connectToDB } from "./db.js";
import { authenticate } from "./authMiddleware.js";
import { getAllTasks, createTask } from "./taskRoutes.js";
// import adminDashboard from "./views/adminDashboard.ejs";
// import adminLogin from "./views/adminLogin.ejs";
// import home from "./views/home.ejs";
// import register from "./views/register.ejs";
// import todoIndex from "./views/todoIndex.ejs";

import dotenv from "dotenv";

// dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 4000;

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
// app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.get("/register", (req, res) => {
  res.render("register");
});

// Connect to MySQL database
connectToDB();

app.get("/admin", (req, res) => {
  res.render("adminDashboard.ejs"); // Without the .ejs extension
});

// Set the view engine to EJS
app.set("view engine", "ejs");
// Set the directory for views
app.set("views", path.join(__dirname, "views"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
