
const {  streamBroadcaster} = require("../socket/streamingSocket");

exports.initSocketIOServers = (server)=>{
   streamBroadcaster(server)
    
}

