class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @testDecorator
  pilotTest(): void {
    console.log("Swish");
  }

  @logError
  pilot(): void {
    console.log("Swish");
  }
}

function testDecorator(target: any, key: string) {
  console.log("Target: ", target);
  console.log("Key: ", key);
}

function logError(target: any, key: string, desc: PropertyDescriptor) {
  console.log("Target: ", target);
  console.log("Key: ", key);
}
