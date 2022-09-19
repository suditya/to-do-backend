const easyLeaderboard = require('../models/easyLeaderboard');
const mediumLeaderboard = require('../models/mediumLeaderboard');
const hardLeaderboard = require('../models/hardLeaderboard');

const insertEasyLeaderBoard = async (req, res) => 
{
    let {email,
        name,
        lowScore,
        time,
        countryEmoji,country} = req.body;
    
    const newEntry = new easyLeaderboard({
        email,
        name,
        lowScore,
        time,
        countryEmoji
    });
    const a = newEntry.save();
    res.send(a);
}

const insertMediumLeaderBoard = async (req, res) => 
{
    console.log("insert medium level ");
    let {email,
        name,
        lowScore,
        time,
        countryEmoji,country} = req.body;
    
    const newEntry = new mediumLeaderboard({
        email,
        name,
        lowScore,
        time,
        countryEmoji
    });
    
    const a = newEntry.save();
    res.send(a);
}
const insertHardLeaderBoard = async (req, res) => 
{
    let {email,
        name,
        lowScore,
        time,
        countryEmoji,country} = req.body;
    
    const newEntry = new hardLeaderboard({
        email,
        name,
        lowScore,
        time,
        countryEmoji
    });
    const a = newEntry.save();
    res.send(a);
}

module.exports = {
    insertEasyLeaderBoard,
    insertMediumLeaderBoard,
    insertHardLeaderBoard,
}