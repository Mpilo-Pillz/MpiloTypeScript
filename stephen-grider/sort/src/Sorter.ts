/**
 * Interfaces do nothign to ensure that the methods are implemented correctly
 * and esure that the right functionality is performed
 * They just made sure that the methods exists and ensure that they have the appropriate types
 * */
export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
export class Sorter {
  constructor(public collection: Sortable) {}

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
