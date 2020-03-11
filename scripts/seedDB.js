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

const songSeed = [
  {
    title: "Chameleon",
    artist: "Herbie Hancock",
    genre: "Jazz Fusion",
    bpm: 111,
    keySig: "A&#9837; Major"
  },
  {
    title: "Workin' Day and Night",
    artist: "Michael Jackson",
    genre: "R&B/Pop",
    bpm: 128,
    keySig: "G Major"
  },
  {
    title: "Reminiscing",
    artist: "The Little River Band",
    genre: " Pop Rock",
    bpm: 92,
    keySig: "D Major"
  },
  {
    title: "Black Market",
    artist: "Weather Report",
    genre: "Jazz Fusion",
    bpm: 105,
    keySig: "F Minor"
  },
  {
    title: "Spain",
    artist: "Return To Forever",
    genre: "Jazz Fusion",
    bpm: 90,
    keySig: "B&#9837; Minor"
  },
  {
    title: " Giant Steps",
    artist: "John Coltrane",
    genre: "Jazz",
    bpm: 144,
    keySig: "C Major"
  },
  {
    title: "Achilles Last Stand",
    artist: "Led Zeppelin",
    genre: "Classic Rock",
    bpm: 146,
    keySig: "E Minor"
  },
  {
    title: "Jungle Boogie",
    artist: "Kool & The Gang",
    genre: "Funk",
    bpm: 108,
    keySig: " F Major"
  },
  {
    title: "Lowrider",
    artist: "Yussef Kamaal",
    genre: "Jazz Funk",
    bpm: 126,
    keySig: "D Major"
  },
  {
    title: "Agua De Beber",
    artist: "Antonio Carlos Jobim",
    genre: "Bossa Nova",
    bpm: 82,
    keySig: "A Minor"
  }
];

const userSeed = [
  {
    name: "Tim Gangl",
    email: "tim.gangl30@gmail.com",
    username: "timgangl",
    password: "root"
  },
  {
    name: "Jed Smit",
    email: "jedsmit1@gmail.com",
    username: "jedsmit",
    password: "password"
  }
];

db.Setlist.remove({})

  .then(() => db.Setlist.collection.insertMany(setlistSeed))
  .then(() => db.Song.collection.insertMany(songSeed))
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });