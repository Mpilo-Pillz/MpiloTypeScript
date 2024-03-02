class SorterBad {
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

const sorterBad = new SorterBad([-18, 14, -11, 5]);
sorterBad.sort();
console.log(sorterBad.collection);

/**
 * this solution is bad beuase we have to:
 *  modify the check
 * modify the sorthing logic
 * if we have 150 data types we have to add conditions for all
 *
 *
 * SOLUTIONS
 * Extract sorting logic into a different class
 * Extract comparison logic into a helper
 * the ultimate goal is to make sorter generic so that it never changes
 * */
