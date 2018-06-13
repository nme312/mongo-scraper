var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ByLineSchema = new Schema({
  byLine: String
});

var ByLine = mongoose.model("ByLine", ByLineSchema);

module.exports = ByLine;