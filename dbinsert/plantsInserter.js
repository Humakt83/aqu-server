var mongoose = require('mongoose');
var Plants = require('../models/plants');

function Plant(scientificName, finnishName, diameter, height, phMin, phMax, dhMin, dhMax, tempMin, tempMax) {
    this.scientificName = scientificName;
    this.finnishName = finnishName;
    this.diameter = diameter;
    this.height = height;
    this.phMin = phMin;
    this.phMax = phMax;
    this.dhMin = dhMin;
    this.dhMax = dhMax;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
}

var plantsArray = [
        new Plant('Crinum calamistratum', 'Kiharakriinumi', 15, 10, 5.8, 7.5, 2, 12, 23, 26),
        new Plant('Ceratophyllum submersum', 'Hentokarvalehti', 15, 10, 6.5, 8.5, 0, 20, 22, 28),
        new Plant('Taxiphyllum barbieri', 'Jaavansammal', 15, 10, 5.5, 8.5, 0, 20, 18, 26),
        new Plant('Taxiphyllum barbieri', 'Kelluhankasammal', 15, 10, 6, 7.5, 0, 20, 10, 28),
        new Plant('Microsorum pteropus', 'Jaavansaniainen', 15, 10, 5, 8, 0, 20, 20, 28),
        new Plant('Ceratopteris thalictroides', 'Vesisaniainen', 15, 10, 5, 8.5, 0, 20, 22, 28),
        new Plant('Vallisneria spiralis', 'Vallisneria', 15, 10, 6, 7.5, 2, 19.9, 23, 28),
        new Plant('Rotala rotundifolla', 'Hentorotala', 15, 10, 5.5, 7.5, 0, 20, 22, 28),
        new Plant('Pistia stratiotes', 'Pistia', 15, 10, 6.5, 7.2, 0, 20, 17, 30),
        new Plant('Nymphaea micrantha', 'Rusolumme', 15, 10, 6.5, 7.5, 2, 12, 24, 28),
        new Plant('Najas guadalupensis', 'Hentonäkinruoho', 15, 10, 6, 8, 0, 20, 20, 30),
        new Plant('Mayaca fluviatilis', 'Hapsuruoho', 15, 10, 5.5, 7, 2, 8, 22, 28),
        new Plant('Myriophyllum tuberculatum', 'Ruosteärviä', 15, 10, 6.5, 7.5, 2, 10, 22, 28),
        new Plant('Limnophila sessiliflora', 'Vedensuosikki', 15, 10, 5.5, 8, 0, 20, 22, 28),
        new Plant('Hygrophila polysperma', 'Intianvesitähdikki', 15, 10, 6, 8, 0, 20, 20, 30),
        new Plant('Hydrocotyle leucocephala', 'Konnanputki', 15, 10, 6, 8, 0, 20, 20, 28),
        new Plant('Elodea canadensis', 'Kanadanvesirutto', 15, 10, 6.5, 8.5, 6, 20, 15, 22),
        new Plant('Echidonorus `Rubin`', 'Rubiinivesimiekka', 15, 10, 6, 8, 4, 20, 22, 30),
        new Plant('Echidonorus `Red Special`', 'Ruostevesimiekka', 15, 10, 6, 8, 4, 30, 22, 28),
        new Plant('Echidonorus grisebachii', 'Amazoninvesimiekka', 15, 10, 6, 8, 0, 20, 22, 28),
        new Plant('Anubias barteri var. barteri', 'Herttakeihäslehti', 15, 10, 5.5, 8, 0, 30, 22, 26),
        new Plant('Anubias barteri var. coffeifolia', 'Kahvikeihäslehti', 15, 10, 5.5, 8, 0, 30, 22, 28),
        new Plant('Saururus cernuus', 'Herttalehti', 15, 10, 6, 8, 0, 30, 18, 24),
        new Plant('Gymnocoronis spilanthoides', 'Vesiasteri', 15, 10, 6.5, 8, 2, 12, 15, 28),
        new Plant('Microsorum pteropus', 'Jaavansaniainen', 15, 10, 5, 8, 0, 30, 20, 28),
        new Plant('Cryptocorune xwillisii', 'Kääpiömelalehti', 15, 10, 6, 7.5, 0, 30, 22, 28),
        new Plant('Cryptocorune undulata', 'Aaltomelalehti', 15, 10, 6, 8, 0, 30, 22, 26),
        new Plant('Eleocharis acicularis', 'Hapsiluikka', 15, 10, 6, 8.5, 0, 30, 15, 24)
    ];

module.exports = function() {
    plantsArray.forEach(function(plant, plants, index) {
        var document = {$setOnInsert: JSON.parse(JSON.stringify(plant))};
        var query = {'scientificName': plant.scientificName };
        Plants.findOneAndUpdate(query, document, {upsert:true}, function(err, doc) {
            if (err) console.error(err);
            else console.log("succesfully saved plants");
        });
    });
}
