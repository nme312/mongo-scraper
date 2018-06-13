var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SummarySchema = new Schema({
  summary: String
});

var Summary = mongoose.model("Summary", SummarySchema);

module.exports = Summary;