const express = require('express');
const router = express.Router();


const { registerController, loginController} = require('../controller/users.controller.js');
const {  getTasksController, addTaskController, updateTaskController, deleteTaskController , editTaskController} = require('../controller/tasks.controller.js');
// console.log("request came!");
router.post('/register', (req, res) => {
    registerController(req, res)
})


router.post('/login', (req, res) => {
    loginController(req, res)
})

router.get('/getTasks', (req, res) => {
    // console.log("task getter");
    getTasksController(req, res);
});

router.post('/addTask', (req, res) => {
    addTaskController(req, res);
});

router.put('/updateTask/', (req, res) => {
    updateTaskController(req, res);
});

router.put('/editTask/', (req, res) => {
    editTaskController(req, res);
});

router.delete('/deleteTask/', (req, res) => {
    deleteTaskController(req, res);
});


module.exports = router;