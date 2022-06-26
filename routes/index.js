const express = require("express");
const router = express.Router();

const taskController = require("../controllers/task_controller");


// route to display the home page which has list and everything
router.get("/", taskController.load);

// Route to add task
router.post("/add-task", taskController.add);

// Route to delete a single task
router.get("/delete-task", taskController.delete);

module.exports = router;