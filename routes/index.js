const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.json({ text: "This is about page" });
});

module.exports = router;
