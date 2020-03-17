const router = require('express').Router();
const setlistRoutes = require("./setlists");
const songRoutes = require("./songs");
const userRoutes = require("./users");
const authRoutes = require("./auth");

router.use("/setlists", setlistRoutes);
router.use("/songs", songRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;