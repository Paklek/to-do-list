var express = require('express'),
    app     = express(),
    db      = require('./src/database/database.js'),
    bodyParser = require('body-parser');

app.use(express.static("./src/static"));
app.set("view engine", "jade");
app.set("views","./src/views/");

app.get("/", function(req, res){
    db.ViewData(1, function(err, results){
        if (err){
            console.log(err);
            res.status(500).send("Database Error");
            return;
        }
        res.render("index",{lists:results});
    });

});

var server  = app.listen(3000, "localhost", function(){
    var host    = server.address().address;
    var port    = server.address().port;
});