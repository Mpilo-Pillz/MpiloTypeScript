import { NoFly } from "./behaviours/noFly";
import { Squeak } from "./behaviours/squeak";
import { Duck } from "./duck";

export class RubberDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new NoFly();
    this.quackBehavior = new Squeak();
  }
}
