
//  create a "class" Chat, that takes a single argument when instantiated
var Chat = function(socket){
    this.socket = socket;
}

//  function to send a chat message
Chat.prototype.sendMessage = function(room, text) {
    var message = {
        room: room,
        text: text
    }
    this.socket.emit("message",message);
};


//  function to change chat rooms
Chat.prototype.changeRoom = function(room) {
    this.socket.emit("join",{
        newRoom: room
    });
};


//  function for processing chat commands (/join and /nick)
Chat.prototype.processCommand = function(command) {
    var words = command.split(" ");
    //  parse command from first word
    var command = words[0]
        .substring(1,words[0].length)
        .toLowerCase();
    var message = false;

    switch (command) {
        case "join" :
            words.shift();
            var room = words.join(" ");
            //  handle room changing/creating
            this.changeRoom(room);break;
        case "nick" :
            words.shift();
            var name = words.join(" ");
            this.socket.emit("nameAttempt",name);
            break;
        default :
            //  return error message if command isn't recognized
            message = "Unrecognized command.";
            break;
    }

    return message;
};
