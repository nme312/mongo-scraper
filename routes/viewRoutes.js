var db = require("../models");

module.exports = function (app) {
    app.get("/home", function (req, res) {
        function findAll() {
            db.Article.find({})
            .then(function (dbArticle) {
                var hbObj = { dbArticle };
                return hbObj;
            });
        }
        res.render("/home", findAll());
    });

    app.get("/new", function (req, res) {
        db.Article.find({})
            .then(function (dbArticle) {
                res.json(dbArticle);
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