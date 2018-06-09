module.exports = function(app) {
    app.get("/", function(req, res){
        var obj = {};
        res.render("index", obj);
    });
}