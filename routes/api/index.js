const router = require('express').Router();
const setlistRoutes = require("./setlists");
const songRoutes = require("./songs");
const userRoutes = require("./users");

router.use("/setlists", setlistRoutes);
router.use("/songs", songRoutes);
router.use("/users", userRoutes);

module.exports = router;