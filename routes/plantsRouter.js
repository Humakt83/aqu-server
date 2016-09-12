var express = require('express');
var bodyParser = require('body-parser');
var Plants = require('../models/plants');

var plantsRouter = express.Router();    
plantsRouter.use(bodyParser.json());

plantsRouter.route('/')
.get(function(req,res,next) {
    Plants.find({}, function (err, leader) {
        if (err) throw err;
        res.json(leader);
    });
})

module.exports = plantsRouter;