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

module.exports = Plant;