/**
 * Created by vali on 1/26/14.
 */

var http = require('http');
var fs = require('fs');


//  client request initially comes in here
var server = http.createServer(function (req, res) {
    //  control is passed to getTitles
    getTitles(res);
}).listen(8000, "127.0.0.1");


function getTitles(res) {
    fs.readFile('./titles.json', function (err, data) {
        if (err) {
            hadError(err, res);
        } else {
            getTemplate(JSON.parse(data.toString()), res);
        }
    });
}

function getTemplate(titles, res) {
    fs.readFile('./template.html', function(err, data){
        if (err) {
            hadError(err, res);
        } else {
            formatHtml(titles, data.toString(), res);
        }
    });
}


function formatHtml(titles, tmpl, res) {
    var html = tmpl.replace( '%', titles.titles.join('<li></li>'));

    read.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}

function hadError(err, res) {
    console.error(error);
    res.end('Server Error');
}


//  Create HTTP server and use callback to define response logic
http.createServer(
    function(req, res) {
        if (req.url == '/') {
            // read JSON file and use callback to define what to do with its contents
                fs.readFile('titles.json',function(err, data){
                    //  if error occurs, log error and return "Server Error" to client
                    if (err) {
                        console.error(err);
                        res.end('Server Error');
                    } else {
                        //  parse data from JSON text
                        var titles = JSON.parse(data.toString());

                        //  read HTML template and use callback when it's loaded
                        fs.readFile(
                            'template.html', function(err, data) {
                                if (err) {
                                    console.error(err);
                                    res.end('Server Error');
                                } else {
                                    var tmpl = data.toString();

                                    //  assemble HTML page showing blog titles
                                    var html = tmpl.replace('%', titles.titles.join('<li></li>'));
                                    res.writeHead(200, {'Content-Type' : 'text/html'});
                                    res.end(html);
                                }

                            }
                        );
                }
            });
        }
    }
).listen(8000,"127.0.0.1");
