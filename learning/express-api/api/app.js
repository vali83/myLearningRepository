
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//  used for parsing body
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var quotes = [
    { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
    { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
    { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
    { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];

app.get('/', routes.index);
app.get('/users', user.list);


// instead of /, just be cause there is no route defined just yet
app.get('/root', function(req, res) {
    res.json(quotes);
});

//  return random quote
app.get("/quote/random", function(req, res){
    var id = Math.floor(Math.random() * quotes.length);
    var q = quotes[id];
    res.json(q);
});

//  return a quote by id
app.get("/quote/:id", function(req, res){
    if (quotes.length <= req.params.id  || req.params.id < 0) {
        res.statusCode = 404;
        return res.send("Error 404: No quotes found");
    }
    var q = quotes[req.params.id];
    res.json(q);
});


//  use the body parser
app.post("/quote", function(req, res){
    if (!req.body.hasOwnProperty("author") || !req.body.hasOwnProperty("text") ) {
        res.statusCode = 400;
        return res.send("Error 400: Post syntax incorrect.")
    }

    var newQuote = {
        author : req.body.author,
        text : req.body.text
    };

    quotes.push(newQuote);
    res.json(true);


});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
