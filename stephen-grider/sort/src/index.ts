class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {}
}

const sorter = new Sorter([-18, 14, -11, 5]);
sorter.sort();
console.log(sorter.collection);
