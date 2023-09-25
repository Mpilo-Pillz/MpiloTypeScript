import { Duck } from "./duck";
import { Mallard } from "./mallard";
import { RubberDuck } from "./rubberDuck";

class DuckSimulator {
  mallard: Duck = new Mallard();
  rubberDuck: Duck = new RubberDuck();

  run() {
    this.mallard.performFly();
    this.mallard.performQuack();

    console.log("another duck");
    this.rubberDuck.performFly();
    this.rubberDuck.performQuack();
  }
}

const duckSimulator = new DuckSimulator();
duckSimulator.run();
