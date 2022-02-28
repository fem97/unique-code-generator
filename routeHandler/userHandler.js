const express = require("express");
const router = express.Router();

router.get("/login", async (req, res) => {
  res.send("Hello");
});

router.get("/register", async (req, res) => {
  res.send("Welcome");
});

module.exports = router;
