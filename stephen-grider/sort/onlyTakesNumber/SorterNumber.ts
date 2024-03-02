import { NumbersCollectionNumber } from "./NumbersCollectionNumber";

export class SorterNumber {
  constructor(public collection: NumbersCollectionNumber) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // the element is J and the element next to is is j+ 1
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
