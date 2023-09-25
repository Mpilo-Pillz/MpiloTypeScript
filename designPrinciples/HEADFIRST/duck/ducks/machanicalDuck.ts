import { JetPoweredFlight } from "../behaviours/jetPoweredFlight";
import { RoboQuack } from "../behaviours/roboQuack";
import { Duck } from "../duck";

export class MachanicalDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new JetPoweredFlight();
    this.quackBehavior = new RoboQuack();
  }
}
