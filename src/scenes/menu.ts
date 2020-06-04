import { Scene, Engine } from "excalibur";
import { Player } from "../actors/player";

export class Menu extends Scene {

  /**
   * Initializes the menu scene
   * @param engine The engine object
   */
  public onInitialize(engine: Engine) {
    console.log('Initializing the menu scene...');

    const player = new Player();
    this.add(player);
  }
}
