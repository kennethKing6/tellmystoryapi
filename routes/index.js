var express = require('express');
var router = express.Router();
const broadcastRouter = require("./broadcasts")

/* GET home page. */
router.use("/",broadcastRouter)

module.exports = router;
