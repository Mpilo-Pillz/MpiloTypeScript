import { CharaterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
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
console.log("-------------------------LinbkedList----------------------------");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(-550);
linkedList.add(30);
linkedList.add(40);

const sorterLinkList = new Sorter(linkedList);
sorterLinkList.sort();
linkedList.print();
