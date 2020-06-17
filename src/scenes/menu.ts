import { Scene, Engine } from "excalibur";
import { Player } from "../actors/characters/player";



/**
 * The menu scene
 */
export class Menu extends Scene {

  /**
   * Initializes the menu scene
   * @param engine The engine object
   */
  public onInitialize(engine: Engine) {
    console.log('Initializing the menu scene...');

    const player = new Player({
      x: engine.currentScene.camera.x,
      y: engine.currentScene.camera.y,
      width: 256,
      height: 256
    });

    this.add(player);
  }
}
