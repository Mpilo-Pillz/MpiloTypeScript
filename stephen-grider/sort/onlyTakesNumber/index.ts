import { NumbersCollectionNumber } from "./NumbersCollectionNumber";
import { SorterNumber } from "./SorterNumber";

const numbersCollection = new NumbersCollectionNumber([-18, 14, -11, 5]);
const sorter = new SorterNumber(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
