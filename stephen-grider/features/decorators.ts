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
  pilotNotReusable(): void {
    throw new Error();
  }

  @logReusableError("Oh no, the boat was sunk in the ociean")
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

function logReusableError(errorMessage: string) {
  return function logError(target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().pilot();
