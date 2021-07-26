
const {Server} = require("socket.io");
const { validate } = require("uuid");
const Broadcasters = require("../broadcasters.json");
const {saveVideoChunck} = require("../utils/broadcastUtils")
exports.streamBroadcaster = (server)=>{

    const io = new Server(server,{cors:{origin:"*"}});
    io.of("/stream").on('connection', (socket) => {
        socket.on("disconnect", (reason) => {
            console.log("disconnection error message",reason)
          });
        const {username,streamingID} = socket.handshake.query;

        if(username !== undefined && streamingID !== undefined && username.length > 0 && validate(streamingID)){
            if(Broadcasters[username.toLowerCase()] !== undefined ){
                if( Broadcasters[username.toLowerCase()].getBroadcastID() === streamingID){
                    console.log(`${username} has just been connected! socketID: ${socket.id}`)
                socket.on(streamingID,(data)=>{
                    console.log("Data",data)
                    saveVideoChunck(username,data);
                    
                })
        
                   
                }else{
                   socket.disconnect(true)
                }
               
            }else{
                socket.disconnect(true)
             }
        }else{
            socket.disconnect(true)
         }
      
      });

      
  
}