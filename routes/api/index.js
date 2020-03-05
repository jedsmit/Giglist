const router = require('express').Router();
const setlistRoutes = require("./setlists");
const songRoutes = require("./songs");

router.use("/setlists", setlistRoutes);
router.use("/songs", songRoutes)

module.exports = router;