$(document).ready(function () {

    var scrapeBtn = $(".scrape-button");

    var saveBtn = $(".save-button");
    var noteBtn = $(".note-button");

    scrapeBtn.on("click", function() {
        $.ajax({
            method: "GET",
            url: "/api/scrape"
        }).then(function(){
            location.reload();
            console.log("scrape complete");
        });
    });

    saveBtn.on("click", function () {
        console.log("click me again i dare you");
        
    });

    noteBtn.on("click", function () {
        console.log("go back to clicking him");
    });

});