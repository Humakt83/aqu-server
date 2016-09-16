var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plantsSchema = new Schema({
    scientificName: {
        type: String,
        required: true,
        unique: true
    },
    diameter: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    temperatureMin: {
        type: Number,
        required: true
    },
    temperatureMax: {
        type: Number,
        required: true
    },
    phMin: {
        type: Number,
        required: true
    },
    phMax: {
        type: Number,
        required: true
    },
    dhMin: {
        type: Number,
        required: true,
        default: 0        
    },
    dhMax: {
        type: Number,
        required: true
    }
});


var Plants = mongoose.model('Plants', plantsSchema);

module.exports = Plants;