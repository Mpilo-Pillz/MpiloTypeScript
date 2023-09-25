import { Duck } from "./duck";
import { MachanicalDuck } from "./ducks/machanicalDuck";
import { Mallard } from "./ducks/mallard";
import { RubberDuck } from "./ducks/rubberDuck";

class DuckSimulator {
  mallard: Duck = new Mallard();
  rubberDuck: Duck = new RubberDuck();
  roboDuck: Duck = new MachanicalDuck();

  run() {
    this.mallard.performFly();
    this.mallard.performQuack();

    console.log("another duck");
    this.rubberDuck.performFly();
    this.rubberDuck.performQuack();

    console.log("another duck");
    this.roboDuck.performQuack();
    this.roboDuck.performFly();
  }
}

const duckSimulator = new DuckSimulator();
duckSimulator.run();
