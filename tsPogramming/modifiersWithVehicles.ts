class Vehicle {
  private kilometers = 0;
  // color: string = 'Sonic Titanium'
  color: string;

  constructor(color: string) {
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
const vehicle = new Vehicle("Grey");

const car = new Car('Sonic Titanium');
// car.moveFuelToEngine(); // private can't be accessed outside the class. only methods inside the class can call drive
car.startEngine();
car.drive();
car.honk();
car.color;
