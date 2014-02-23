/**
 * Created by vali on 2/10/14.
 */

var events = require('events');
var net = require('net');
var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};
console.log("before events")


channel.on('join', function(id, client) {
    console.log("Join event function");

    var welcome = "Welcome!\n"
        + 'Guests online: ' + this.listeners('broadcast').length;
    client.write(welcome + "\n");

    this.clients[id] = client;
    this.subscriptions[id] = function(senderId, message) {
      //  this.clients[id].write("Join event. Client:"  + id);
    //  Add a listener for the join event that stores a user’s client object, allowing the application to send data back to the user.
       if (id != senderId) {
           console.log("Writing message: " + message);
            this.clients[id].write(message);
        } }
    this.on('broadcast', this.subscriptions[id]);
});

channel.on('leave', function(id) {
    console.log("LEAVE EVENT; Removing BROADCAST listener")
    channel.removeListener('broadcast', this.subscriptions[id]);
    //  Create listener for leave event

    channel.emit('broadcast', id, id + " has left the chat.\n");
});

    //  Ignore data if it’s been directly broadcast by the user.
    //  Add a listener, specific to the current user, for the broadcast event.
    var server = net.createServer(function (client) {
    var id = client.remoteAddress + ':' + client.remotePort;

    client.on('connect', function() {
        console.log("Connect...Emiting JOIN event" );
        channel.emit('join', id, client);
    });
    client.on('data', function(data) {
        console.log("Data event.Emiting BROADCAST");
        data = data.toString();
        channel.emit('broadcast', id, data);
        console.log(data);
    });

    client.on('close', function(){
        console.log("CLOSE event.Emiting LEAVE");
        channel.emit('leave', id);
    });
});

console.log("Start listening");
server.listen(8888);