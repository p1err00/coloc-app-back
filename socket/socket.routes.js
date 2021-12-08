var appRoot = require('app-root-path');
var io = require(appRoot+'/server/io');

//send notification when new user send add to coloc
if(user.didNewStuff()){
    emitUserAction(user);
}

var emitUserAction = function(user){
    io.socket.emit('user_did_action', user);
}