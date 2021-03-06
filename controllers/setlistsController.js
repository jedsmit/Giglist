const db = require("../models");
const auth = require('../middleware/auth')

module.exports = {
  // @route GET api/setlists
  // @desc Get all setlists
  // @access Private
  findAll: function (req, res) {
    db.Setlist
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  // @route GET api/setlists/:id
  // @desc Get one setlists
  // @access Private
  findById: async function (req, res) {
    console.log("find by id" + req.params.id)
    await db.Setlist
      .findById(req.params.id).populate('songs')
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
  },
  // @route POST api/setlists
  // @desc Create a new setlist
  // @access Private
  create: function (req, res) {
    console.log("post controller" + req.body)
    db.Setlist
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Setlist
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Setlist
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}