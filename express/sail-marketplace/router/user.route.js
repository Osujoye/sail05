const express = require("express");
const router = express.Router();
const { getAllUser, signUp, signIn } = require("../controller/user.controller");

router.route("/getalluser").get(getAllUser);
router.route("/signup").post(signUp);
router.route("/signin").post(signIn);

module.exports = router;
