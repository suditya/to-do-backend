require('dotenv').config();

require( './data/db' );
const path = require('path')
console.log(__dirname)
// require('dotenv').config({ path: path.resolve(__dirname,"./.env" ) });
// connect();


const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
app.use(express.static(path.join(process.cwd(), 'public')));

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
app.use(function (req, res, next) {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
})
const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}) 
    .on('error', error => { // server.on( ... )
        console.error(error.message);
    });
