var db = require("../models");

module.exports = function (app) {
    app.get("/home", function (req, res) {
        function findAll() {
            db.Article.find({})
                .then(function (dbArticle) {
                    var articles = { dbArticle };
                    return articles;
                });
        }
        var obj = findAll();
        res.render("home", findAll());
    });

    app.get("/saved", function (req, res) {
        var obj = {};
        res.render("savedArticles", obj);
    });
}