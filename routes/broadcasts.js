const express = require('express');
const router = express.Router();
const broadcastAPIs = require("../controllers/broadcastController")

router.post("/add_broadcast",broadcastAPIs.addBroadcast);

router.get("/list_broadcasters",broadcastAPIs.listBroadcasts)

router.get("/list_broadcasters_by_views",broadcastAPIs.listBroadcastsByViews)

router.post("/stream",broadcastAPIs.startStreaming)

module.exports = router;