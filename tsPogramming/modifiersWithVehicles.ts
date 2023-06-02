class Vehicle {
    public drive(): void {
        console.log("chugga chugga");
    }

    public honk(): void {
        console.log("Beep"); 
    }
}

class Car extends Vehicle {
    public drive(): void {
        console.log("vroom"); // cant be ade private if parent has it public
    }

    private moveFuelToEngine() {
        console.log("Fuel moved form fuel tank to engine");
        
    }
}

const car = new Car();
// car.moveFuelToEngine(); // private can't be accessed outside the class. only methods inside the class can call drive
car.drive(); 
car.honk();