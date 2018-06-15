var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    byLine: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
        unique: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref:"Note"
    },
    saved: {
        type: false,
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;