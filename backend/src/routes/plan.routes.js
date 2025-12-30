const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { plan: "Free", price: 0, ads: true },
    { plan: "Advance", price: 6, ads: false },
    { plan: "Super", price: 120, multiDevice: true }
  ]);
});

module.exports = router;
