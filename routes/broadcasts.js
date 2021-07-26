const express = require('express');
const router = express.Router();
const broadcastAPIs = require("../controllers/broadcastController");
const { startStreaming } = require('../socket/streamingSocket');

router.post("/add_broadcast",broadcastAPIs.addBroadcast);

router.post("/list_broadcasters",broadcastAPIs.listBroadcasts)

router.post("/list_broadcasters_by_views",broadcastAPIs.listBroadcastsByViews)



module.exports = router;