const express = require('express');
const router = express.Router();
const broadcastAPIs = require("../controllers/broadcastController");
const { startStreaming } = require('../socket/streamingSocket');
const { ExpressPeerServer } = require('peer');
const { server } = require('../bin/www');

router.post("/add_broadcast",broadcastAPIs.addBroadcast);

router.post("/list_broadcasters",broadcastAPIs.listBroadcasts)

router.post("/list_broadcasters_by_views",broadcastAPIs.listBroadcastsByViews)

//Live streaming
const customGenerationFunction = () => (Math.random().toString(36) + '0000000000000000000').substr(2, 16);

const peerServer = ExpressPeerServer(server, {
    path: '/',
    generateClientId:customGenerationFunction()
  });
  
router.use("stream",peerServer)

peerServer.on('connection', (client) => {
    console.log("client",client)
 });

 peerServer.on('disconnect', (client) => { 
     console.log("Disconnection",client)
 });
module.exports = router;