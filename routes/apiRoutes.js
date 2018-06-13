var request = require("request");
var cheerio = require("cheerio");
var mongojs = require("mongojs");

var databaseUrl = "mongoScraper";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
  console.log("Database Error:", error);
});

module.exports = function (app) {
    app.get("/api/scrape", function (req, res) {
        request("https://www.cnn.com/", function (error, response, html) {
            if (error) throw (error);
            var $ = cheerio.load(html);
            $("li").each(function (i, element) {
                var title = $(element).find("article").find("div").find("div").find("span").text();
                if (title) {
                    db.scrape.insert({ "title": title }, function (error, data, html) {
                        if (error) throw(error);
                        else {
                            res.json(data);
                            console.log(data);
                        }
                    });
                }
            });
        });
    });
}