const easyLeaderboard = require('../models/easyLeaderboard');
const mediumLeaderboard = require('../models/mediumLeaderboard');
const hardLeaderboard = require('../models/hardLeaderboard');

const getEasyLeaderBoard= async (req, res) =>
{
    try
    {
        const arrayOfPlayers= await easyLeaderboard.find({}).sort({
            lowScore:1,
            time:1
        });
        res.send(arrayOfPlayers);
    }
    catch(err)
    {
        res.send(err);
    }
}

const getMediumLeaderBoard= async (req, res) =>
{
    try
    {
        const arrayOfPlayers= await mediumLeaderboard.find({}).sort({
            lowScore:1,
            time:1
        });
        res.send(arrayOfPlayers);
    }
    catch(err)
    {
        res.send(err);
    }
}

const getHardLeaderBoard= async (req, res) =>
{
    try
    {
        const arrayOfPlayers= await hardLeaderboard.find({}).sort({
            lowScore:1,
            time:1
        });
        res.send(arrayOfPlayers);
    }
    catch(err)
    {
        res.send(err);
    }
}

module.exports = {
    getEasyLeaderBoard,
    getMediumLeaderBoard,
    getHardLeaderBoard,
}