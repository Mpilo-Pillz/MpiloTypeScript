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

const nkhuku = new Chicken();
