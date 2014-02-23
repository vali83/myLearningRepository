/**
 * Created by vali on 2/14/14.
 */
var flow = require('nimble');

flow.series([
    function (callback) {
        setTimeout(function (){
            console.log('I execute first');
            callback();
        }, 1000);
    },

    function (callback) {
        setTimeout(function() {
            console.log('I execute second');
            callback();
        }, 500);
    },

    function (callback) {
        setTimeout(function() {
            console.log('I execute last');
            callback();
        }, 100);
    }
]);