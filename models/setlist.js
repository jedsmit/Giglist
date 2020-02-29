const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const setlistSchema = new Schema({
    name: { type: String, required: true },
    gigtype: { type: String },
    songs: [{
        name: {
            type: String
        },
        bpm: {
            type: Number
        }
    }]
});



const Setlist = mongoose.model("Setlist", setlistSchema);

module.exports = Setlist;