
"use strict"

const {v4} = require("uuid");
const fs = require('fs');
const path = require("path");

class Broadcast{
    broadcastID;
    userbroadcastID
    videopath;
    imgpath;
    broadcasterusername;
    views

    constructor(broadcasterUsername,broadcastUserID){
        this.broadcastID = v4();
        this.userbroadcastID = broadcastUserID;
        this.views = 0;
        this.broadcasterusername = broadcasterUsername;
       
     this.initFiles()
    }
    initFiles(){
        this.videopath =  createVideoFile(`./files/${this.broadcastID}/video.mp4`);
       
        this.imgpath =  createVideoImage(`./files/${this.broadcastID}/image.png`)
    }

     getViews(){
        return this.views;
    }

     getBroadcastID(){
        return this.broadcastID;
    }

     getUserBroadcasterID(){
        return this.userbroadcastID;
    }

     getVideoPath(){
        return this.videopath;
    }

     getImgPath(){
        return this.imgpath;
    }
     getBroadcasterUsername(){
        return this.broadcasterusername;
    }

    

   
}

 function createVideoFile(videopath){
    fs.mkdirSync(path.dirname(videopath), { recursive: true }, (err) => {
        if (err) throw err;

        fs.openSync(videopath,"w",function (err, file) {
            if (err) throw err;
           
          })
         
      })
      return __dirname + "/." + videopath; 
}

function createVideoImage(imgpath){
    fs.mkdir(path.dirname(imgpath), { recursive: true }, (err) => {
        if (err) throw err;

        fs.open(imgpath,"w",function (err, file) {
            if (err) throw err;
          })
      })

      return  __dirname + "/." + imgpath;

}

module.exports.Broadcast = Broadcast;