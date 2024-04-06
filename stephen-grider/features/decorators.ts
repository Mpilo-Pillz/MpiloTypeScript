class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log("Swish");
  }
}

function testDecorator(target: any, key: string) {
  console.log("Target: ", target);
  console.log("Key: ", key);
}
