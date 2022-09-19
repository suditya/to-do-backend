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
        res.status(200).send(arrayOfPlayers);
    }
    catch(err)
    {
        res.status(404).send(err);
        
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
        res.status(200).send(arrayOfPlayers);
    }
    catch(err)
    {
        res.status(404).send(err);
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
        res.status(200).send(arrayOfPlayers);
    }
    catch(err)
    {
        res.status(404).send(err);
    }
}

module.exports = {
    getEasyLeaderBoard,
    getMediumLeaderBoard,
    getHardLeaderBoard,
}