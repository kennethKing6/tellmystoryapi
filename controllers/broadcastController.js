
const uuid = require("../utils/uuid");
const {v4, validate} = require("uuid");
const { addNewBroadcast, searchBroadcastByViews } = require("../utils/broadcastUtils");
const Broadcasters = require("../broadcasters.json");

exports.addBroadcast = (req,res,next)=>{
    const response = {};
    const reqBody = req.body;
    
    //Key verification
    const hasUsernameKey = Object.keys(reqBody).findIndex((data)=>data === "username") ;
    if (hasUsernameKey !== -1 && reqBody.username.length > 0){
       
        const broadcast = addNewBroadcast(reqBody.username)
        if(broadcast === null){
            res.status(400);
            res.send(`error: ${reqBody.username} already exists`);
        }else{
            response["response"] = "We successfully added the broadcast";
            response["broadcaster"] = broadcast;
    
            res.status(200)
            res.json(response);
        }
       

    }else{
        res.status(400);
        res.send("The request failed!");
    }
   
}

exports.listBroadcasts = (req,res)=>{
    const {body} = req;
    
    //Key verification
    const hasUsernameKey = Object.keys(body).findIndex((data)=>data === "username");

    if(hasUsernameKey !== -1 && Broadcasters[body.username.toLowerCase()] !== undefined){
        const response = {
            broadcasters:Object.values(Broadcasters)
        };

        res.status(200);
        res.json(response)

    }else{
        res.status(401)
        res.send("Unauthorized")
    }

}

exports.listBroadcastsByViews = (req,res)=>{
    const {username,views} = req.body;

    if( username !== undefined && views !== undefined && username.length > 0 && typeof views === "number"){
        if(Broadcasters[username.toLowerCase()] !== undefined){
            return res.json(searchBroadcastByViews(views));
        }else{
            res.status(405)
            res.send(`error: ${username} is an unknown user`)
        }
    }else{
        res.status(400)
        res.send("Bad request")
    }
    
}

