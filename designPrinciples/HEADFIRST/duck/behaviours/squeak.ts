import { QuackBehavior } from "../duckTypes";

export class Squeak implements QuackBehavior {
  quack() {
    console.log("Sqeak Squak");
  }
}
