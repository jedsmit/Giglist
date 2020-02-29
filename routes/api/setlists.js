const router = require("express").Router();
const setlistsController = require("../../controllers/setlistsController")

router.route("/")
    .get(setlistsController.findAll)
    .post(setlistsController.create);

module.exports = router;