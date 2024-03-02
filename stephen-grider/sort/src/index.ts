class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    // if collection is an array of numbers
    if (this.collection instanceof Array) {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          // the element is J and the element next to is is j+ 1
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
      }
    }

    // If logic is a string
    if (typeof this.collection === "string") {
    }
  }
}

const sorter = new Sorter([-18, 14, -11, 5]);
sorter.sort();
console.log(sorter.collection);
