const mongoose = require('mongoose');
// { id: 1, title: 'Task A', completed: false },
const tasksSchema = new mongoose.Schema({
    id: Number,
    title: String,
    completed: Boolean,
    email:String
})

const tasks = mongoose.model('tasks', tasksSchema);

module.exports = tasks;