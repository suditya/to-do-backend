const mongoose = require('mongoose');

const mediumLeaderBoardSchema = new mongoose.Schema({
    email:String,
    name:String,
    lowScore:Number,
    time:String,
    countryEmoji:String,
})

const mediumLeaderboard = mongoose.model('mediumLeaderboard', mediumLeaderBoardSchema);

module.exports = mediumLeaderboard;