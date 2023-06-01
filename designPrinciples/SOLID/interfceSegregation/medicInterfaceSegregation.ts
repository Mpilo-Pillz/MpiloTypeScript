interface AdvancedLifeSupport {
    performCPR: () => string
}

class Doctor implements AdvancedLifeSupport {
    performCPR() {
        return `Perform doctor chest compressions for 30 seconds`
    };

    checkBloodPressure() {
        console.log("Strap onto arm and pump");
        
    }
    
}

class Paramedic implements AdvancedLifeSupport {
    performCPR() {
        return `paramedic performs chest compressions for 30 seconds`
    };
    
}

class Surgeon extends Doctor implements AdvancedLifeSupport {
     performCPR() {
        return `Sings staying alive while performing chest compressions for 30 seconds`
    }
}

class Receptionist {
    registerPatients() {
        return `Adds patients to appointment list for the day`
    }
}

// If Receptionsist attends ad first aide corse and learns cpr
// class Receptionist implements AdvancedLifeSupport {
//     registerPatients() {
//         return `Adds patients to appointment list for the day`
//     }

//     performCPR () {
//         return "fbvdsfhjvsdflvkjsdf"
//     };
// }

const palesa = new Paramedic()
console.log(palesa.performCPR())

const sibusiso = new Surgeon()
console.log(sibusiso.performCPR())

const ditogo = new Doctor()
console.log(ditogo.performCPR());

const remofilwe = new Receptionist()

const delegatePerformingCPR = (profession: AdvancedLifeSupport) => {
console.log(profession.performCPR());
}

delegatePerformingCPR(palesa)
delegatePerformingCPR(sibusiso)
delegatePerformingCPR(ditogo)
// delegatePerformingCPR(remofilwe) error cos cant perform cpr
