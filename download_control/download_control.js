/**
 * Created by vali on 2/22/14.
 */

var flow = require('nimble');
var exec = require('child_process').exec;

//  Download Node source code for given version
function downloadNodeVersion(version, destination, callback) {
    var url = 'http://nodejs.org/dist/node-v' + version + '.tar.gz';
    var filepath = destination + '/'+ version + '.tgz';
    exec('curl' + url + ' >' + filepath, callback);
}

//  Execute series of tasks in sequence
flow.series([
    function (callback) {
        //  Execute downloads in parallel
        flow.parallel([
            function(callback) {
                console.log('Downloading Node v0.10.24 ... ');
                downloadNodeVersion('0.10.24', '/tmp', callback);
            }
        ],
        [
            function(callback) {
                console.log('Downloading Node v0.10.25 ...');
                downloadNodeVersion('0.10.25', '/tmp', callback);
            }
        ], callback);
    },

    function (callback) {
        console.log('Creating archive for downloaded files...');
        exec(
            'tar cvf node_distros.tar /tmp/0.10.24.tgz /tmp/0.10.25.tgz',
            function (error, stdout, stderr) {
                console.log('All done!');
                callback();
            }
        );
    }
]);
