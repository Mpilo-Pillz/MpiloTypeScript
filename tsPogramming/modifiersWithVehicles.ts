class Vehicle {
//   private kilometers = 0;
  // color: string = 'Sonic Titanium'
  color: string;

  constructor(color: string, private kilometers: number) {
    this.color = color;
  }
// short syntax
//   constructor(public color: string) {}

  public drive(): void {
    console.log("chugga chugga");
    this.increaseCarKilometers();
  }
  private increaseCarKilometers() {
    this.kilometers++;
  }

  public honk(): void {
    console.log("Beep");
  }
  protected sendPowerStoredInBatteries() {
    console.log("Can use radio, lights, and infotainment system");
  }
}

class Car extends Vehicle {

    constructor(public wheels: number, color: string, kilometers: number) {
        super(color, kilometers); // is a reference to constructor method in parent
        // we didn't put put public infront of color to not overwrite the field
    }
  public drive(): void {
    console.log("vroom"); // cant be a private if parent has it public
    // this.increaseCarKilometers() make modifier protected if want it o be used here
  }
  // marked as private becuase it is a method that we do not want other developers to call as they could break something
  private moveFuelToEngine() {
    console.log("Fuel moved form fuel tank to engine");
  }

  public startEngine() {
    this.moveFuelToEngine();
    this.sendPowerStoredInBatteries();
  }
}
const vehicle = new Vehicle("Grey", 0);

const car = new Car(4, 'Sonic Titanium', 10000);
// car.moveFuelToEngine(); // private can't be accessed outside the class. only methods inside the class can call drive
car.startEngine();
car.drive();
car.honk();
car.color;
