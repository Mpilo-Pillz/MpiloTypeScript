import { FlyWithWings } from "./behaviours/flyWithWings";
import { Quack } from "./behaviours/quack";
import { FlyBehavior, QuackBehavior } from "./duckTypes";

export abstract class Duck {
  flyBehavior: FlyBehavior = new FlyWithWings();
  quackBehavior: QuackBehavior = new Quack();

  constructor() {}

  performFly() {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  swim() {
    console.log("All ducks can survivie in water weather thet swim or float");
  }
}
