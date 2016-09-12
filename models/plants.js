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
    }
});


var Plants = mongoose.model('Plants', plantsSchema);

module.exports = Plants;