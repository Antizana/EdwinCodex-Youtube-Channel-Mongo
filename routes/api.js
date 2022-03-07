/* Basics for my YouTube channel, mongo section
 */
const express = require("express");

//router
const router = express.Router();

const Profile = require("../models/Profile");

// Profiles Query
router.get("/profile", (req, res) => {
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

//Positions Query
router.get("/profile/position/:position", (req, res) => {
  console.log(req.params);
  Profile.find({ position: req.params.position })
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

// Search by Query
router.get("/profile/query", (req, res) => {
  console.log(req.query);
  let query = req.query;
  if (req.query.age != null) {
    query = {
      age: { $gt: req.query.age },
    };
  }
  Profile.find(query)
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
