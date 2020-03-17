const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/auth"
router.route("/")
    .get(authController.getOne)
    .post(authController.findOne);



module.exports = router;