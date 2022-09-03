const mongoose = require('mongoose');

const nameEmail = new mongoose.Schema({
    email:String,
    lowScore:Number,
    time:String
})

const leaderboard = mongoose.model('leaderboard', leaderBoardSchema);

module.exports = leaderboard;