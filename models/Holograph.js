const mongoose = require("mongoose");
const { min, max } = require('mongoose');

// Define holograph schema
const holographSchema = new mongoose.Schema({
    holograph_name: String,
    creator: String,
    edition_number: Number
});


module.exports = mongoose.model("Holograph", holographSchema)