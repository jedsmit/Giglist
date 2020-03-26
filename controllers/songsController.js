const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Song
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //@route GET api/songs/list/:arr
    //@desc Return songs by id
    //@access Private
    findMany: function (req, res) {
        db.Song
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //@route GET api/songs/:id
    //@desc Return a song by id
    //@access Private
    findById: function (req, res) {
        db.Song
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // @route POST api/songs
    // @desc Create a new song
    // @access Private
    create: function (req, res) {
        db.Song
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Song
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Song
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}