const router = require("express").Router();
const setlistsController = require("../../controllers/setlistsController")

// Matches with "/api/setlists"
router.route("/")
    .get(setlistsController.findAll)
    .post(setlistsController.create);

// Matches with "/api/setlists/:id"
router
    .route("/:id")
    .get(setlistsController.findById)
    .put(setlistsController.update)
    .delete(setlistsController.remove);

module.exports = router;