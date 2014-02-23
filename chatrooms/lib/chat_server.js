var socketio = require("socket.io");
var io;
var guestNumber = 1;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};

exports.listen = function (server) {

    //  start Socket.IO server, allowing it to piggyback on existing HTTP server
    io = socketio.listen(server);
    io.set("log level", 1);

    //  define how each user connection will be handled
    io.sockets.on("connection", function(socket){

        //  assign user a guest name when they connect
        guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);

        //  place user in Lobby room when they connect
        joinRoom(socket, "Lobby");

        // handle user messages, name change attempts, and room creation/changes
        handleMessageBroadcasting(socket, nickNames);
        handleNameChangeAttempts(socket, nickNames, namesUsed);

        handleRoomJoining(socket);

        //  provide user with list of occupied rooms on request
        socket.on("rooms", function(){
           socket.emit("rooms", io.sockets.manager.rooms);
        });

        //  define cleanup logic for when user disconnects
        handleClientDisconnection(socket, nickNames, namesUsed);
    });
};


function assignGuestName(socket, guestNumber, nickNames, namesUsed) {
    //  generate new guest name
    var name = "Guest" + guestNumber;

    //  associate guest name with client connection ID
    nickNames[socket.id] = name;

    //  let the user know their guest name
    socket.emit("nameResult", {
        success : true,
        name : name
    });

    namesUsed.push(name);   // note that guest name is now used

    //  increment counter used to generate guest names
    return guestNumber + 1;
};


function joinRoom(socket, room) {

    //  make user join room
    socket.join(room);

    //  note that user is now in this room
    currentRoom[socket.id] = room;

    //  let user know they are now in new room
    socket.emit("joinResult", {
        room: room
    });

    //  let other users in room know that user has joined
    socket.broadcast.to(room).emit("message", {
        text: nickNames[socket.id] + " has joined '" + room + "'."
    });

    //  determine what other users are in the same room as user
    var usersInRoom = io.sockets.clients(room);
    //  if other users exist, summarize who they are
    if (usersInRoom.length > 1) {
        var usersInRoomSummary = "Users currently in " + room + ": ";
        for (var index in usersInRoom) {
            var userSocketId = usersInRoom[index].id;
            if (userSocketId != socket.id) {
                if (index > 0) {
                    usersInRoomSummary += ", ";
                }
                usersInRoomSummary += nickNames[userSocketId];
            }
        }
        usersInRoomSummary += ".";
        //  send summary of the users in the room to the user
        socket.emit("message", {
            text: usersInRoomSummary
        });
    }

};


function handleNameChangeAttempts(socket, nickNames, namesUsed) {
    //  add listener for nameAttempt event
    socket.on("nameAttempt", function(name) {
        //  don't allow nicknames to begin with 'Guest'
        if (name.indexOf("Guest") == 0) {
            socket.emit("nameResult", {
                success: false,
                message : "Names cannot begin with 'Guest'"
            });
        } else {
            if (namesUsed.indesOf(name) == -1) {
                var previousName = namesUsed[socket.id];
                var previousNameIndex = namesUsed.indexOf(previousName);
                namesUsed.push(name);
                nickNames[socket.id] = name;
                //  remove previous name to make available to other clients
                delete namesUsed[previousNameIndex];
                socket.emit("nameRsult", {
                    success: true,
                    name: name
                });
                socket.broadcast.to(currentRoom[socket.id]).emit("message",{
                    text: previousName + " is now known as " + name + "."
                });
            } else {
                //  send error to client if that name is already registered
                socket.emit("nameResult", {
                    success: false,
                    message: "That name is already in use."
                });
            }
        }
    });
};


function handleMessageBroadcasting(socket) {
    socket.on("message", function (message) {
        socket.broadcast.to(message.room).emit("message",{
            text: nickNames[socket.id] + ":" + message.text
        });
    });
}


function handleRoomJoining(socket) {
    socket.on("join", function (room){
        socket.leave(currentRoom[socket.id]);
        joinRoom(socket, room.newRooom);
    });
}


function handleClientDisconnection(socket) {
    socket.on("disconnect", function (){
        var nameIndex = namesUsed.indexOf(nickNames[socket.id]);
        delete namesUsed[nameIndex];
        delete nickNames[socket.id];
    });
}