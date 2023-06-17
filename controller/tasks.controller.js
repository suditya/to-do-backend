const tasks = require('../models/Task');
// console.log(tasks, " ")
// Get all tasks
const getTasksController = async (req, res) => {
  try {
    // console.log("getting tasks")
    const email = req.query.email;
    // console.log(email, "email in getting task");
    const tasksInDB = await tasks.find({ email: email });
    // console.log(tasksInDB, " task from db");
    res.json(tasksInDB);
  } catch (error) {
    // console.log("db error");
    res.send(error, "db error");
  }

};

// Add a new task
const addTaskController = async (req, res) => {
  const { id, title, email } = req.body;
  // console.log("req body", id, title);
  const newTask = new tasks({ id: id, title: title, completed: false, email: email });
  // tasks.push(newTask);
  try {
    await newTask.save();
    res.status(201).send("saved data");
  }
  catch (error) {
    res.send(error, "some error happened");
  }
};

// Update an existing task
const updateTaskController = async (req, res) => {
  try {
    const { email, title } = req.query;

    // Find the task document that matches the email and task title
    const task = await tasks.findOne({ email, title });
    // console.log(email, title, " ", task)
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update the task properties as needed
    task.completed = !(task.completed);

    // Save the updated task
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }

};

// Delete a task
const deleteTaskController = async (req, res) => {
  const email = req.body.email;
  const title = req.body.title
  try {
    console.log("trying to delete", email , title )
    const deletedTask = await tasks.findOneAndDelete({ email, title });
    console.log(deletedTask, " deleted task ");
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


const editTaskController = async (req, res) => {
  try {
    const { email, id, title, completed } = req.body;
    console.log(req.body);
    // Find the task document that matches the email and task title
    const task = await tasks.findOne({ email, id });
    console.log(" ", task)
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update the task properties as needed
    task.completed = completed;
    task.title = title;

    // Save the updated task
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }

}



module.exports = {
  addTaskController,
  deleteTaskController,
  getTasksController,
  updateTaskController,
  editTaskController
}
