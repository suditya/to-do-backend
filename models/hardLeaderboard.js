const mongoose = require('mongoose');

const leaderBoardSchema = new mongoose.Schema({
    email:String,
    name:String,
    lowScore:Number,
    time:String,
    countryEmoji:String,
})

const hardLeaderboard = mongoose.model('hardLeaderboard', leaderBoardSchema);

module.exports = hardLeaderboard;