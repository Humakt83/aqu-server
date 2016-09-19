var mongoose = require('mongoose');
var Plants = require('../models/plants');
var Plant = require('../models/plant');

var plantsArray = [
        new Plant('Crinum calamistratum', 'Kiharakriinumi', 30, 100, 5.8, 7.5, 2, 12, 23, 26),
        new Plant('Ceratophyllum submersum', 'Hentokarvalehti', 15, 70, 6.5, 8.5, 0, 20, 22, 28),
        new Plant('Taxiphyllum barbieri', 'Jaavansammal', 20, 20, 5.5, 8.5, 0, 20, 18, 26),
        new Plant('Riccia fluitans', 'Kelluhankasammal', 5, 3, 6, 7.5, 0, 20, 10, 28),
        new Plant('Microsorum pteropus', 'Jaavansaniainen', 20, 40, 5, 8, 0, 20, 20, 28),
        new Plant('Ceratopteris thalictroides', 'Vesisaniainen', 50, 60, 5, 8.5, 0, 20, 22, 28),
        new Plant('Vallisneria spiralis', 'Vallisneria', 20, 70, 6, 7.5, 2, 20, 23, 28),
        new Plant('Vallisneria australis', 'Isovallisneria', 40, 300, 6, 7.5, 4, 20, 22, 28),
        new Plant('Rotala rotundifolla', 'Hentorotala', 20, 70, 5.5, 7.5, 0, 20, 22, 28),
        new Plant('Pistia stratiotes', 'Pistia', 20, 20, 6.5, 7.2, 0, 20, 17, 30),
        new Plant('Nymphaea micrantha', 'Rusolumme', 40, 60, 6.5, 7.5, 2, 12, 24, 28),
        new Plant('Najas guadalupensis', 'Hentonäkinruoho', 15, 100, 6, 8, 0, 20, 20, 30),
        new Plant('Mayaca fluviatilis', 'Hapsuruoho', 15, 60, 5.5, 7, 2, 8, 22, 28),
        new Plant('Myriophyllum tuberculatum', 'Ruosteärviä', 15, 60, 6.5, 7.5, 2, 10, 22, 28),
        new Plant('Limnophila sessiliflora', 'Vedensuosikki', 10, 60, 5.5, 8, 0, 20, 22, 28),
        new Plant('Hygrophila polysperma', 'Intianvesitähdikki', 20, 50, 6, 8, 0, 20, 20, 30),
        new Plant('Hydrocotyle leucocephala', 'Konnanputki', 10, 60, 6, 8, 0, 20, 20, 28),
        new Plant('Elodea canadensis', 'Kanadanvesirutto', 10, 200, 6.5, 8.5, 6, 20, 15, 22),
        new Plant('Echidonorus `Rubin`', 'Rubiinivesimiekka', 40, 60, 6, 8, 4, 20, 22, 30),
        new Plant('Echidonorus `Red Special`', 'Ruostevesimiekka', 20, 30, 6, 8, 4, 30, 22, 28),
        new Plant('Echidonorus grisebachii', 'Amazoninvesimiekka', 40, 60, 6, 8, 0, 20, 22, 28),
        new Plant('Anubias barteri var. barteri', 'Herttakeihäslehti', 15, 40, 5.5, 8, 0, 30, 22, 26),
        new Plant('Anubias barteri var. coffeifolia', 'Kahvikeihäslehti', 15, 25, 5.5, 8, 0, 30, 22, 28),
        new Plant('Saururus cernuus', 'Herttalehti', 15, 30, 6, 8, 0, 30, 18, 24),
        new Plant('Gymnocoronis spilanthoides', 'Vesiasteri', 20, 60, 6.5, 8, 2, 12, 15, 28),
        new Plant('Cryptocorune xwillisii', 'Kääpiömelalehti', 15, 20, 6, 7.5, 0, 30, 22, 28),
        new Plant('Cryptocorune undulata', 'Aaltomelalehti', 15, 25, 6, 8, 0, 30, 22, 26),
        new Plant('Eleocharis acicularis', 'Hapsiluikka', 10, 20, 6, 8.5, 0, 30, 15, 24)
    ];

module.exports = function() {
    plantsArray.forEach(function(plant) {
        plant.identificationNumber = plantsArray.indexOf(plant) + 1;
        var document = {$setOnInsert: JSON.parse(JSON.stringify(plant))};
        var query = {'identificationNumber': plant.identificationNumber };
        Plants.findOneAndUpdate(query, document, {upsert:true}, function(err, doc) {
            if (err) console.error(err);
            else console.log("succesfully saved plants");
        });
    });
}
