import { CharaterCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([-18, 14, -11, 5]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
console.log("-------------------------CHARACTERS----------------------------");
const charactersCollection = new CharaterCollection("Mpilo");
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charactersCollection.data);
