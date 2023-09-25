import { FlyBehavior } from "../duckTypes";

export class FlyWithWings implements FlyBehavior {
  fly() {
    console.log("flaps its wings and flies like a bird");
  }
}
