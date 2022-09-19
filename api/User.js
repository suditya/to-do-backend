const express = require('express');
const router = express.Router();


const { SigninController, SignupController, getPlayerDetails} = require('../controller/users.controller.js');
const { insertEasyLeaderBoard, insertMediumLeaderBoard, insertHardLeaderBoard } = require('../controller/insertLeaderboard.controller.js');

const { getEasyLeaderBoard, getMediumLeaderBoard, getHardLeaderBoard } = require('../controller/getLeaderboard.controller.js');

router.post('/register', (req, res) => {
    SignupController(req, res)  
})


router.post('/login', (req, res) => {
    SigninController(req, res)
})

router.post('/insertEasyLeaderBoard',(req,res)=>
{
   
    insertEasyLeaderBoard(req,res);
})

router.post('/insertMediumLeaderBoard',(req,res)=>
{
   
    insertMediumLeaderBoard(req,res);
})

router.post('/insertHardLeaderBoard',(req,res)=>
{
    insertHardLeaderBoard(req,res);
})

router.get('/getEasyLeaderBoard',(req,res)=>
{
    
    getEasyLeaderBoard(req,res);
})

router.get('/getMediumLeaderBoard',(req,res)=>
{
    getMediumLeaderBoard(req,res);
})

router.get('/getHardLeaderBoard',(req,res)=>
{
    getHardLeaderBoard(req,res);
})


router.get('/getPlayerDetails/:emailID',(req,res)=>
{
    getPlayerDetails(req,res);
})


module.exports = router;