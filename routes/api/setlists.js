const router = require("express").Router();
const setlistsController = require("../../controllers/setlistsController")
const auth = require('../../middleware/auth')

// Matches with "/api/setlists"
router.route("/")
    .get(setlistsController.findAll)
    .post(setlistsController.create);

// Matches with "/api/setlists/:id"
router
    .route("/:id")
    .get(setlistsController.findById)
    .put(auth, setlistsController.update)
    .delete(auth, setlistsController.remove);

module.exports = router;