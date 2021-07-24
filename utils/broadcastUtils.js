'use strict';
const {v4} = require("uuid");
const fs = require("fs")
const jsonBroadcast = require("../broadcasters.json");
const {Broadcast} = require("../model/Broadcast.js");

exports.addNewBroadcast = function(username){
    if(jsonBroadcast[username.toLowerCase()] === undefined){
        const broadcast = new Broadcast(username,v4())
        
        jsonBroadcast[username.toLowerCase()] = broadcast;

        return broadcast;
    }

    return null;
}

exports.searchBroadcastByViews = (views)=>{
    const broacastersList = Object.values(jsonBroadcast);

    return broacastersList.filter((value)=>{
        console.log("value.getViews()",value.getViews())
       return value.getViews() >= views
    })

}

exports.saveVideoChunck = (username,videoChunck)=>{
    const broadcast = jsonBroadcast[username.toLowerCase()]
    if(broadcast !== undefined){
        const writeStream = fs.createWriteStream(broadcast.getVideoPath())
        writeStream.write(videoChunck)

        writeStream.close()
    }
}

exports.saveVideoPicture = (username,picture)=>{
    const broadcast = jsonBroadcast[username.toLowerCase()]
    if(broadcast !== undefined){
        const writeStream = fs.createWriteStream(broadcast.getImgPath())
        writeStream.write(picture)

        writeStream.close()
    }
}