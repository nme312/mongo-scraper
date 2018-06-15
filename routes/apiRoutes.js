var db = require("../models");
var cheerio = require("cheerio");
var axios = require("axios");

module.exports = app => {
    app.get("/api/scrape", (req, res) => {
        console.log("linked");
        axios("https://www.nytimes.com/").then(function (response) {
            var $ = cheerio.load(response.data);
            $(".theme-summary").each(function (i, element) {
                var result = {};
                result.title = $(this)
                    .children("h2")
                    .children("a")
                    .text();
                result.byLine = $(this)
                    .children(".byline")
                    .text();
                result.summary = $(this)
                    .children(".summary")
                    .text();
                if (result.title && result.byLine && result.summary) {
                    console.log(result);
                    db.Article.create(result)
                        .then(function (dbArticle) {
                            console.log(dbArticle);
                        })
                        .catch(function (err) {
                            return res.json(err);
                        });
                };
            });
        });
        res.send("scrape complete");
    });

    app.get("/api/article/:id", (req, res) => {
        db.Article.find({ _id: req.params.id })
            .then(function (dbArticle) {
                res.json(dbArticle);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.put("/api/save/:id", (req, res) => {
        db.Article.find({ _id: req.params.id })
            .then(function () {
                db.Article.update({ saved: true });
            })
            .catch(function (err) {
                res.json(err);
            });
    });
}