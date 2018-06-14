var db = require("../models");

module.exports = function (app) {
    app.get("/home", function (req, res) {
        db.Article.find({})
            .then(function (dbArticle) {
                console.log(dbArticle);
                res.render("home", { article: dbArticle.reverse() });
            });
    });

    app.get("/saved", function (req, res) {
        var obj = {};
        res.render("savedArticles", obj);
    });
}