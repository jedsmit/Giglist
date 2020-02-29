const router = require('express').Router();
const setlistRoutes = require("./setlists");

router.use("/setlists", setlistRoutes);

module.exports = router;