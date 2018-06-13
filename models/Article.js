var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    byLine: {
        type: Schema.Types.ObjectId,
        ref: "byLine"
    },
    summary: {
        type: Schema.Types.ObjectId,
        ref: "summary"
    },
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;