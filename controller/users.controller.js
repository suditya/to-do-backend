const bcrypt = require('bcrypt');
const User = require('../models/User');



const registerController = async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    console.log(req.body);
    name = name.trim();
    email = email.trim();
    password = password.trim();


    User.find({ email }).then(result => {

        if (result.length) {
            res.status(401).json({

                message: "User with this email id already exist"
            })
        } else {
            const saltRounds = 10;
            bcrypt.hash(password, saltRounds).then(hashedPassword => {
                const newUser = new User({
                    name,
                    email,
                    password: hashedPassword,
                });
                const a = newUser.save();
                res.status(200).send(a);
            }).catch(err => {
                res.status(401).json({
                    message: "Internal server error , please try again!"
                })
            })
        }
    }).catch(err => {

        res.status(401).json({
            message: "Internal server error , please try again!"
        })
    })
}




const loginController = async (req, res) => {
    let { email, password } = req.body;
    email = email.trim();
    password = password.trim();
    User.find({ email })
        .then(data => {
            if (data.length) {
                {
                    const hashedPassword = data[0].password;
                    bcrypt.compare(password, hashedPassword).then(result => {
                        if (result) {
                            res.status(200).json({
                                data: data,
                                email: data[0].email,
                                userId: data[0]._id
                            })
                        } else {
                            res.status(401).json({
                                message: "Credentials didn't matched make sure you entered right credentials",
                            })
                        }
                    })
                        .catch((err) => {
                            res.status(401).json({
                                message: "Internal server error , please try again!",
                            })
                        })
                }

            } else {
                res.status(401).json({
                    message: "Credentials didn't matched make sure you entered right credentials",
                })
            }
        })
        .catch((err => {
            res.status(401).json({

                message: "Credentials didn't matched make sure you entered right credentials"
            })
        }))
}



// const getPlayerDetails = async (req, res) => {

//     const requestedEmail = req.params.emailID;
//     try {
//         let playerObj = await User.find({ email: requestedEmail });
//         res.status(200).send(playerObj[0]);
//     }
//     catch (err) {
//         res.status(401).send(err);
//     }

// }




module.exports = {
    loginController,
    registerController,
    // getPlayerDetails
}
