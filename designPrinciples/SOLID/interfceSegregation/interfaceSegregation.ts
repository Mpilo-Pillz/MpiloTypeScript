interface Reportable {
    // name: string; forces us to implementblank names for objects that dont need it
    summary(): string
}

interface Nameable {
    name: string
}



const newLandCruiser = {
    name: 'Land Cruiser 300',
    year: new Date(),
    canBeADailyDriver: false,
    summary(): string {
        return `The Toyota ${this.name} is not a daily driver`
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

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}

const printName = (item: Nameable): void => {
    console.log(item.name)
}

printSummary(sparklingWater);
// printName(sparklingWater); // error does not have name
printSummary(newLandCruiser);
printName(newLandCruiser);

/**
 * Classes 
 * */ 

class newLexusOffRoader implements Reportable, Nameable {
name = 'LX 600';
isOffRoadCapable = true

summary(): string {
    return `The Lexus ${this.name} can be taken off road`
}
}

const myDreamCar = new newLexusOffRoader()

printSummary(myDreamCar)