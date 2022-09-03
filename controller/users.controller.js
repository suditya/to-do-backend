const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken')
const leaderboard = require('../models/leaderboard');


console.log('hi');
const SignupController = async (req, res) => {
    console.log("Sign Up controller")
    console.log(req.body);
    // let { name, email, password } = req.body;
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let countryEmoji=req.body.countryEmoji
    // console.log(name)
    name = name.trim();
    email = email.trim();
    password = password.trim();
    countryEmoji=countryEmoji.trim();
    

    User.find({ email }).then(result => {
        // console.log("result aa gya: ", result)
        if (result.length) {
            // console.log("User with this email id is already exist")
            res.json({
                status: "FAILED",
                message: "User with this email id already exist"
            })
        } else {
            const saltRounds = 10;

            bcrypt.hash(password, saltRounds).then(hashedPassword => {
                console.log(hashedPassword, "hashedPassword");
                const newUser = new User({
                    name,
                    email,
                    password: hashedPassword,
                    countryEmoji
                });
                // console.log("user data saved");
                const a = newUser.save();
                res.send(a);
            }).catch(err => {
                res.json({
                    status: "FAILED",
                    message: "An error occured while hashing password!"
                })
            })
        }
    }).catch(err => {

        res.json({
            status: "FAILED",
            message: "An error occured while checking for existing user!"
        })
    })
}


// const SignupController = async (req,res) => {
//     console.log(Obj);
//     const Obj= new User(
//         {
//             name:req.body.name,
//             email:req.body.email,
//             password:req.body.password
//         }
//     )
//     try
//     {
//         const a= await Obj.save()
//         res.send.json(a);
//     }
//     catch(err)
//     {
//         res.send('Error', err)
//     }
// }


const SigninController = async (req, res) => {
    console.log("Sign in working ")
    let { email, password } = req.body;
    email = email.trim();
    password = password.trim();
    // console.log("email and pass is: ", email, password)

    User.find({ email })
        .then(data => {
            // console.log("data he: ", data[0].verified)
            // console.log(data,"data");
            if (data.length) {
                 {
                    // console.log("khaa gyiii")
                    const hashedPassword = data[0].password;
                
                    bcrypt.compare(password, hashedPassword).then(result => {
                        // console.log(result);
                        if (result) {   
                            res.json({
                                status: "SUCCESS",
                                data: data,
                                email: data[0].email,
                                userId: data[0]._id
                            })
                        } else {
                            res.json({
                                status: "FAILED",
                                message: "Invalid password entered",
                            })
                        }
                    })
                        .catch((err) => {
                            res.json({
                                status: "FAILED",
                                message: "An error occured while comapring password",
                            })
                        })
                }

            } else {
                res.json({
                    status: "FAILED",
                    message: "Email i'd doesn't exist. Please Register first!",
                })
            }
        })
        .catch((err => {
            res.json({
                status: "FAILED",
                message: "Email i'd doesn't exist. Please Register first"
            })
        }))
}

const insertLeaderBoard = async (req, res) => 
{
    let {email,
        name,
        lowScore,
        time,
        countryEmoji,country} = req.body;
    console.log(email,"-> email", lowScore, "-> lowScore", time, "-> time")
    console.log("req body : ",req.body);
    const newEntry = new leaderboard({
        email,
        name,
        lowScore,
        time,
        countryEmoji
    });
    console.log("user data saved");
    const a = newEntry.save();
    res.send(a);
}

const getPlayerDetails= async(req, res)=>
{
    console.log("get player  details")
    const requestedEmail=req.params.emailID;
    console.log(requestedEmail, "requested email" )
    try
    {
        let playerObj= await User.find({email:requestedEmail});
        console.log("player name :",playerObj[0].countryEmoji);
        res.send(playerObj[0]);
    }
    catch(err)
    {
        console.log(err);
    }
    
}


const getLeaderBoard= async(req, res) =>
{
    try
    {
        const arrayOfPlayers= await leaderboard.find({}).sort({
            lowScore:1,
            time:1
        });
        res.send(arrayOfPlayers);
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = {
    SigninController,
    SignupController,
    insertLeaderBoard,
    getLeaderBoard,
    getPlayerDetails
}
