# aqu-server

Provides REST end point for querying plants from the database.

Example responses:

#####/plants
[{"_id":"57de6c47ba9681f980b23644","identificationNumber":1,"tempMax":26,"tempMin":23,"dhMax":12,"phMax":7.5,"phMin":5.8,"height":10,"diameter":15,"finnishName":"Kiharakriinumi","scientificName":"Crinum calamistratum","__v":0,"dhMin":2}]

#####/plants/lite
[{"scientificName":"Crinum calamistratum","diameter":15,"height":10,"identificationNumber":1}]


###Database schema
Plants schema:
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
