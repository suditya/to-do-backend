const express = require('express');
const router = express.Router();


const { SigninController, SignupController, insertLeaderBoard , getLeaderBoard , getPlayerDetails} = require('../controller/users.controller.js');


router.post('/register', (req, res) => {
    SignupController(req, res)  
})


router.post('/login', (req, res) => {
    SigninController(req, res)
})

router.post('/insertLeaderBoard',(req,res)=>
{
    insertLeaderBoard(req,res);
})

router.get('/getLeaderBoard',(req,res)=>
{
    getLeaderBoard(req,res);
})

router.get('/getPlayerDetails/:emailID',(req,res)=>
{
    console.log("router k call ",req.params["emailID"]);
    getPlayerDetails(req,res);
})


module.exports = router;