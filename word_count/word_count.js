/**
 * Created by vali on 2/22/14.
 */

var fs = require('fs');
var completedTasks = 0;
var tasks = [];
var wordCounts = {};
var filesDir = './text';

function checkIfComplete() {
    completedTasks++;
    if (completedTasks == tasks.length) {
        for (var index in wordCounts) {
            console.log(index + ': ' + wordCounts[index]);
        }
    }
}

function countWordsInText(text) {
    var words = text
        .toString()
        .toLowerCase()
        .split(/\W+/)
        .sort();
    //  Count words occurrences in text
    for (var index in words) {
        var word = words[index];

        if (word) {
            wordCounts[word] = (wordCounts[word]) ? wordCounts[word] + 1 : 1;
        }
    }
}

//  Get a list of the files in the text directory
fs.readdir(filesDir, function(err, files){
    if (err) throw err;
    for (var index in files) {
        //  Define a task to handle each file
        //  Each task includes a call to a function that will asynchronously
        //  read the file and then count the file's word usage.
        var task = (function(file) {
            return function() {
                fs.readFile(file, function(err, text){
                    if (err) throw err;
                    countWordsInText(text);
                    checkIfComplete();
                });
            }
        })(filesDir + '/' + files[index]);
        tasks.push(task);
    }
    for (var task in tasks) {
        tasks[task]();
    }
});