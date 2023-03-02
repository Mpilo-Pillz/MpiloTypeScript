var newLandCruiser = {
    name: 'Land Cruiser 300',
    year: new Date(),
    canBeADailyDriver: false,
    summary: function () {
        return "The " + this.name + " is not a daily driver";
    }
};
var sparklingWater = {
    color: 'Transparent',
    carbonated: true,
    sugar: 0,
    summary: function () {
        return "Sparkling water has " + this.sugar + " grams of sugar";
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(sparklingWater);
printSummary(newLandCruiser);
