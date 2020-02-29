const mongoose = require("mongoose");
const db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/setlistdb");

const setlistSeed = [
    {
        name: "Jazz set 1",
        gigtype: "Jazz"

    },
    {
        name: "Funk set 1",
        gigtype: "Funk"
    }
];

db.Setlist.remove({})
    .then(() => db.Setlist.collection.insertMany(setlistSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });