var db = require("../models");

module.exports = function (app) {
    app.get("/home", function (req, res) {
        db.Article.find({})
            .then(function (dbArticle) {
                res.render("/home", dbArticle);
            });
    });

    app.get("/new", function (req, res) {
        db.Article.find({})
            .then(function (dbArticle) {
                res.render("/home", dbArticle);
            })
            .catch(function (err) {
                res.json(err);
            });

    });

    app.get("/saved", function (req, res) {
        var obj = {};
        res.render("savedArticles", obj);
    });
}