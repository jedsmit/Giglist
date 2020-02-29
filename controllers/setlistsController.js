const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Setlist
            .find(req.query)
            .then(db.Model => res.json(dbModel))
            .catch(err => res.status(422).jason(err));
    }
}