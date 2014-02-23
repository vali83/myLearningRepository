/**
 * Created by vali on 2/22/14.
 */

var fs = require('fs');
var request = require('request');
var htmlparser = require('htmlparser');
var configFilename = './rss_feeds.txt';

//  Task 1: Make sure file containing the list of RSS feed URLs exists
function checkForRSSFile() {
    fs.exists(configFilename, function(exists){
        if (!exists) {
            return next(new Error('Missing RSS file:  ' + configFilename));
            next(null,configFilename);
        }
    });
}


//  Task 2: Read and parse file containing feed URLs.
function readRSSFile(configFilename) {
    fs.readFile(confifFilename, function(err, feedList){
        if (err) return next(err);

        //  Convert list of feed URLs to a string then into an array of feed URLs.
        feedList = feedList.toString().replace(/^\s+|\s+$/g, '').split("\n");

        var random = Math.floor(Math.random()*feedList.length);
        next(null, feedList[random]);
    });
}

//  Task 3: Do a HTTP request and get data for the selected feed.
function downloadRSSFeed(feedURL){
    request({uri: feedURL}, function (err, res, body) {
        if (err) return next(err);
        if (res.statusCode != 200) {
            return next(new Error('Abnormal response status code: ' + res.statusCode));
        }
        next(null, body);
    });
}


//  Task 4: Parse RSS data into array of items.
function parserRSSFeed(rss) {
    var handler = new htmlparser.RssHandler();
    var parser = new htmlparser.parse(handler);
    parser.parseComplete(rss);

    if (!handler.dom.items.length)
        return next(new Error('No RSS items found.'));

    var item = handler.dom.items.shift();
    console.log(item.title);
    console.log(item.link);
}


var tasks = [checkForRSSFile, readRSSFile, downloadRSSFeed, parserRSSFeed];

function next(err, result) {
    if (err) throw err;

    var currentTask = tasks.shift();

    if (currentTask) {
        currentTask(result);
    }

}

next();