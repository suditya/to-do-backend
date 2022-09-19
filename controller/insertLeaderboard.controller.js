const easyLeaderboard = require('../models/easyLeaderboard');
const mediumLeaderboard = require('../models/mediumLeaderboard');
const hardLeaderboard = require('../models/hardLeaderboard');

const insertEasyLeaderBoard = async (req, res) => {
    let {
        email,
        name,
        lowScore,
        time,
        countryEmoji
    } = req.body;

    const newEntry = new easyLeaderboard({
        email,
        name,
        lowScore,
        time,
        countryEmoji
    });
    try {
        const a = newEntry.save();
        res.status(200).send(a);
    }
    catch (err) {
        res.status(404).send(err);
    }

}

const insertMediumLeaderBoard = async (req, res) => {
    console.log("insert medium level ");
    let { email,
        name,
        lowScore,
        time,
        countryEmoji
    } = req.body;

    const newEntry = new mediumLeaderboard({
        email,
        name,
        lowScore,
        time,
        countryEmoji
    });

    try {
        const a = newEntry.save();
        res.status(200).send(a);
    }
    catch (err) {
        res.status(404).send(err);
    }
}
const insertHardLeaderBoard = async (req, res) => {
    let { email,
        name,
        lowScore,
        time,
        countryEmoji } = req.body;

    const newEntry = new hardLeaderboard({
        email,
        name,
        lowScore,
        time,
        countryEmoji
    });
    try {
        const a = newEntry.save();
        res.status(200).send(a);
    }
    catch (err) {
        res.status(404).send(err);
    }
}

module.exports = {
    insertEasyLeaderBoard,
    insertMediumLeaderBoard,
    insertHardLeaderBoard,
}