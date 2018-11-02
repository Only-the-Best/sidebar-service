const mongoose = require("mongoose");
const mongoUri = 'mongodb://localhost/sidebar';

mongoose.connect(mongoUri);
const db = mongoose.connection;

console.log("mongoose connected");

module.exports = db;