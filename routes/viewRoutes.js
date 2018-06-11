module.exports = function(app) {
    app.get("/home", function(req, res){
        var obj = {};
        res.render("home", obj);
    });

    app.get("/new", function(req, res){
        var obj = {};
        res.render("newArticles", obj);
    });

    app.get("/saved", function(req, res){
        var obj = {};
        res.render("savedArticles", obj);
    });
}