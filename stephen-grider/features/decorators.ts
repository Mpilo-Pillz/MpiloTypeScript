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
    throw new Error();
  }
}

function testDecorator(target: any, key: string) {
  console.log("Target: ", target);
  console.log("Key: ", key);
}

function logError(target: any, key: string, desc: PropertyDescriptor) {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log("Oops, the boat was sunk");
    }
  };
}

new Boat().pilot();
