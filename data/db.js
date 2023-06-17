
const mongoose = require('mongoose');

const {NODE_ENV,DB_HOST,DB_USER, DB_PASSWORD, DB_NAME} = process.env;
// original below code
// const connectionStr = NODE_ENV === 'development' ? `mongodb://${DB_HOST}/${DB_NAME}` :  `mongodb+srv://${DB_USER}:${DB_PASSWORD}$@{DB_HOST}/${DB_NAME}/?retryWrites=true&w=majority`

// const connectionStr = NODE_ENV === 'development' ? `mongodb://${DB_HOST}/${DB_NAME}` :  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}/?retryWrites=true&w=majority`


// mongodb+srv://sudityagupta:<password>@todoapp.g4fq29p.mongodb.net/
// const connectionStr = NODE_ENV === 'development' ? `mongodb://${DB_HOST}/${DB_NAME}` :  `mongodb+srv://${DB_USER}:${DB_PASSWORD}${DB_HOST}/?retryWrites=true&w=majority`


const connectionStr = NODE_ENV === 'development' ? `mongodb://${DB_HOST}/${DB_NAME}` : `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

console.log(connectionStr, "connection str");
// mongodb+srv://username:password@hostname/database

mongoose.connect(connectionStr, {
    useNewUrlParser: true,
});


mongoose.connection.on('error', error => {
    console.error(`could not connect to database ${DB_NAME}, error = `, error.message)
    process.exit(1);
})

mongoose.connection.on('open', function() {
    console.error(`connected to database ${DB_NAME}`)
})