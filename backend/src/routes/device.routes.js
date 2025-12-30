const express = require("express");
const router = express.Router();
const deviceController = require("../controllers/device.controller");

router.post("/register", deviceController.registerDevice);
router.get("/:userId", deviceController.getDevicesByUser);


module.exports = router;
