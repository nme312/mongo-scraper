var db = require("../models");

var cheerio = require("cheerio");

module.exports = function (app) {
    app.get("/api/scrape", function (req, res) {
        request("https://www.nytimes.com/", function (error, response, html) {
            if (error) throw (error);
            console.log(html);
            var $ = cheerio.load(html);
            $(".story-heading").each(function (i, element) {
                var title = $(element).children("a").text();
                var byLine = $(element).children("p.byline").text();
                var summary = $(element).children("p.summary").text();
                console.log(title);
                if (title && byLine && summary) {
                    db.Article.create({ "title": title, "byLine": byLine, "summary": summary }, function (error, data) {
                        if (error) throw (error);
                        console.log(data);
                    });
                }
            });
            res.send("scrape complete");
        });
    });

    app.get("/api/get", (req, res) => {
        db.mongoScraper.find({})
            .then(function (dbMongoScraper) {
                res.json(dbMongoScraper);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
}