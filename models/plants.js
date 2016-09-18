var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plantsSchema = new Schema({
    identificationNumber: {
        type: Number,
        unique: true,
        required: true
    },
    scientificName: {
        type: String,
        required: true,
        unique: true
    },
    finnishName: {
        type: String,
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
    tempMin: {
        type: Number,
        required: true
    },
    tempMax: {
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