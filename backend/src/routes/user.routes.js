const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/getUserDetails/:id", userController.getUserDetails);
// router.get("/getUsers", authController.login);
// router.post("/login", authController.login);

module.exports = router;
