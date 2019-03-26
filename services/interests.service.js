const db = require('../_helper/db');
const Interests = db.interests;


module.exports = {
    getAllInterests
}

async  function getAllInterests() {
    return await Interests.find();
}