var express = require('express');
var bodyParser = require('body-parser');
var Plants = require('../models/plants');

var plantsRouter = express.Router();    
plantsRouter.use(bodyParser.json());

plantsRouter.route('/')
.get(function(req,res,next) {
    Plants.find({}, function (err, plants) {
        if (err) throw err;
        res.json(plants);
    });
})
plantsRouter.route('/lite')
.get(function(req,res,next) {
    Plants.find({}, function (err, plants) {
        if (err) throw err;
        var lite = [];
        plants.forEach(function(plant) {
            lite.push({'scientificName': plant.scientificName, 'diameter': plant.diameter, 'height': plant.height, 'identificationNumber': plant.identificationNumber})
        });
        res.json(lite);
    });
})

module.exports = plantsRouter;
