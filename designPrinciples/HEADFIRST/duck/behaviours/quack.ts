import { QuackBehavior } from "../duckTypes";

export class Quack implements QuackBehavior {
  quack() {
    console.log("Typical duck quacking sound");
  }
}
