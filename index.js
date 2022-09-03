require('dotenv').config();

require( './data/db' );
const path = require('path')
console.log(__dirname)
// require('dotenv').config({ path: path.resolve(__dirname,"./.env" ) });
// connect();


const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

app.use(bodyParser.json())
// app.use(cors())
app.use(cors({origin: true, credentials: true}));


// app.get('/',(req,res)=>
// {
//     res.send("hello worl!");
// })

const UserRouter = require('./api/User');
app.use('/api/user', UserRouter)

// const PORT = process.env.PORT_NUMBER || 3000
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}) 
    .on('error', error => { // server.on( ... )
        console.error(error.message);
    });