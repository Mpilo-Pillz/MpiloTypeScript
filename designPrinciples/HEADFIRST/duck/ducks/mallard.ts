import { Duck } from "../duck";
import { Quack } from "../behaviours/quack";
import { FlyWithWings } from "../behaviours/flyWithWings";

export class Mallard extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }
}
