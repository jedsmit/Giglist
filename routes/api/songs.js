const router = require("express").Router();
const songsController = require("../../controllers/songsController")
const auth = require('../../middleware/auth')
// Matches with "/api/setlists"
router.route("/")
    .get(songsController.findAll)
    .post(auth, songsController.create);

// Matches with "/api/setlists/:id"
router
    .route("/:id")
    .get(auth, songsController.findById)
    .put(auth, songsController.update)
    .delete(auth, songsController.remove);

module.exports = router;