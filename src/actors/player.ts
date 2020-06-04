import { Actor, Engine } from "excalibur";

export class Player extends Actor {

  public onInitialize(engine: Engine) {
    console.log({ player: engine });
  }
}
