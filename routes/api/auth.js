const router = require("express").Router();
const authController = require("../../controllers/authController");
const auth = require("../../middleware/auth");

// Matches with "/api/auth"
router.route("/")
    .post(authController.findOne);

// Matches with "/api/auth/user"
router.route("/user")
    .get(auth, authController.findById);

//Matches with "/api/auth/login"
router.route("/login")
    .post(authController.loginUser)
module.exports = router;
