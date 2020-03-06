const mongoose = require("mongoose");
const db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/setlistdb");

const setlistSeed = [
  {
    name: "Jazz Standards set 1",
    gigtype: "Jazz"

  },
  {
    name: "Jazz set 2",
    gigtype: "Jazz-Fusion"

  },
  {
    name: "Funk set 1",
    gigtype: "Funk"
  },
  {
    name: "Prog set 1",
    gigtype: "Prog-Rock"
  },
  {
    name: "Bluegrass set 1",
    gigtype: "Bluegrass"
  },
  {
    name: "Neo-Soul set 1",
    gigtype: "Neo-Soul"
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