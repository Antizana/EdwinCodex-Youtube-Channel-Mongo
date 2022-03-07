const express = require("express");

//router
const router = express.Router();

const Profile = require("../models/Profile");

router.get("/profile", (req, res) => {
  // return res.json({ status: 200 });
  Profile.find()
    .then((profiles) => {
      res.json({
        confirmation: "success",
        data: profiles,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
});

module.exports = router;

Profile.find()
  .then((profiles) => {
    res.json({
      confirmation: "success",
      data: profiles,
    });
  })
  .catch((err) => {
    res.json({
      confirmation: "fail",
      message: err.message,
    });
  });
