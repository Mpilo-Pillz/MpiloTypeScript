const newLandCruiser = {
    name: 'Land Cruiser 300',
    year: new Date(),
    canBeADailyDriver: false,
    summary(): string {
        return `The ${this.name} is not a daily driver`
    }
}

const sparklingWater = {
    color: 'Transparent',
    carbonated: true,
    sugar: 0,
    summary: function(): string {
        return `Sparkling water has ${this.sugar} grams of sugar`;
    }
}