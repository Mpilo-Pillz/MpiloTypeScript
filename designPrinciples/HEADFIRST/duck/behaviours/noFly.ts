import { FlyBehavior } from "../duckTypes";

export class NoFly implements FlyBehavior {
  fly() {
    console.log("Does not fly");
  }
}
