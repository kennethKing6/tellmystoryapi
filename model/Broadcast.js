
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
        this.videopath = `./files/${this.broadcastID}/video.mp4`;
        this.imgpath = `./files/${this.broadcastID}/image.png`;
        createVideoFile(this.videopath);
        createVideoImage(this.imgpath)
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
    fs.mkdir(path.dirname(videopath), { recursive: true }, (err) => {
        if (err) throw err;

        fs.open(videopath,"w",function (err, file) {
            if (err) throw err;
            console.log('Saved!');
          })
      })
   
}

function createVideoImage(imgpath){
    fs.mkdir(path.dirname(imgpath), { recursive: true }, (err) => {
        if (err) throw err;

        fs.open(imgpath,"w",function (err, file) {
            if (err) throw err;
            console.log('Saved!');
          })
      })
}
module.exports.Broadcast = Broadcast;