const server = require("../bin/www");


exports.streamIO = (req,res)=>{
    const options = {
        path:"/stream",
    };
    const streaminIO = require("socket.io")(server, options);
    
    streaminIO.on("connection",(socket)=>{
        console.log("Response to data")
        const {username,streamingID} = socket.handshake.query;
        console.log(`${username} has just been connected! socketID: ${socket.id}`)
        socket.on(streamingID,(data)=>{
            console.log("*****Data received******",data)
            saveVideoChunck(username,data);
        })
        
       
    
    })
    // res.status(200)
    res.send("Listening")
}