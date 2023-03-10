interface CanFly {
    fly: () => string
}

interface CanSwim {
    swim: () => string
}

class Bird {
    isFemale: boolean;
    isMale: boolean;

    laysEggs(): string {
        if(this.isFemale){
            return "New little bird in a shall"; 
        }
        return "Male birds sing to attract females"
    }
}

class Chicken extends Bird {
    crowsInTheMorning(): string {
        if (this.isMale) {
            return `cookulo kookoo`
        }
        return `A hen does not crow`
    }
}

class Penguin extends Bird implements CanSwim {
    swim(){
        return `Slides and Dives in to te cold water`
    };
}

const whale = {
    breathesUnderWater: false,
    givesBirth() {
        return `A very tiny adorable whales now exists`
    },
    swim() {
        return `Stays under water for a very long time`
    }
}

const nkhuku = new Chicken();
const liDada = new Penguin();

const swimmingShow = (creature: CanSwim) => {
    console.log(creature.swim())
}

swimmingShow(liDada)
swimmingShow(whale)
// swimmingShow(nkhuku) throws error chickens dont swim
