import { FlyBehavior } from "../duckTypes";

export class JetPoweredFlight implements FlyBehavior {
  fly() {
    console.log("Super jet engines flies at the speed of a rocket");
  }
}
