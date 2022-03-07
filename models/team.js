const mongoose = require("mongoose");

const Team = new mongoose.Schema({
  Name: { type: String, default: "", trim: true },
  champions: { type: Number, default: 0 },
});

module.exports = mongoose.model("Team", Team);
